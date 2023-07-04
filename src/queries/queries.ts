import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerComponentClient<Database>({ cookies });

export async function getProducts () {
  const {data, error} = await supabase.from("products").select('id, name, price, url, average_rating');
  return {data, error};
}

export async function getProductById (id: number) {
  const {data, error} = await supabase.from("products").select('id, name, price, url, average_rating').eq('id', id);
  return {data, error};
}

type Product = {
  name: string;
  price: number;
  url: string;
  average_rating: number;
  profile_id: string;
}

export async function addProduct(product : Product) {
  const {count, error: countError} = await supabase.from("products").select('*', {count: 'exact', head: true});
  const {data, error} = await supabase.from("products").insert({id: count! + 1, ...product}).select();
  return {data, error};
}

export async function addToCart(product_id: number, profile_id: string) {
  const {data: products, error: productError} = await supabase.from("products").select().eq('id', product_id);
  const {count, error: countError} = await supabase.from("cart_products").select('*', {count: 'exact', head: true});
  const {data, error} = await supabase.from("cart_products").insert({id: count! + 1,product_id, profile_id, quantity: 1, total: products![0].price});
  return {data, error};
}

export async function checkOutCart(product_ids : number[], shipping_address_id: number) {
  const {data: products, error: productsError} = await supabase.from("cart_products").select().filter('id', 'in', `(${product_ids.toString()})`);
  if(productsError) return {data: null, error: productsError};
  const {count: ordersCount, error: orderCountError} = await supabase.from("orders").select('*', {count: 'exact', head: true});
  if(orderCountError) return {data: null, error: orderCountError};
  const {data: order, error: orderError} = await supabase.from("orders").insert({
    id: ordersCount! + 1,
    shipping_address_id,
    status: 'pending payment',
  }).select();
  if(orderError) return {data: null, error: orderError};
  const {count: lineItemsCount, error: lineItemsCountError} = await supabase.from('line_items').select('*', {count: 'exact', head: true});
  if(lineItemsCountError) return {data: null, error: lineItemsCountError};
  const newProducts = products?.map((product, index) => {
    return {
      id: lineItemsCount! + 1 + index,
      cart_prod_id: product.id,
      order_id: order![0].id,
      created_at: new Date().toString(),
    }
  })
  const {data, error} = await supabase.from('line_items').insert(newProducts!).select();
  return {data, error}
}
