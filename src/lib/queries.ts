import { Database } from "@/lib/database.types";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

type ProductsInsert = Database["public"]["Tables"]["products"]["Insert"];
type CartProductsInsert =
  Database["public"]["Tables"]["cart_products"]["Insert"];
type LineItemsInsert = Database["public"]["Tables"]["line_items"]["Insert"];

export async function getProducts(supabaseClient: SupabaseClient<Database>) {
  return await supabaseClient
    .from("products")
    .select("id, name, price, url, average_rating");
}
type ProductsResponse = Awaited<ReturnType<typeof getProducts>>;
export type ProductsResponseSuccess = ProductsResponse["data"];
export type ProductsResponseItem = NonNullable<ProductsResponseSuccess>[number];

export async function getUsers(supabaseClient: SupabaseClient<Database>) {
  return await supabaseClient
    .from("profiles")
    .select("id, full_name, avatar_url");
}
type UsersResponse = Awaited<ReturnType<typeof getUsers>>;
export type UsersResponseSuccess = UsersResponse["data"];
export type UsersResponseItem = NonNullable<UsersResponseSuccess>[number];

export async function getUserById(
  supabaseClient: SupabaseClient<Database>,
  id: string
) {
  return await supabaseClient
    .from("profiles")
    .select("id, full_name, avatar_url")
    .eq("id", id)
    .limit(1)
    .single();
}
type UserResponse = Awaited<ReturnType<typeof getUserById>>;
export type UserResponseSuccess = UserResponse["data"];

export async function getProductById(
  supabaseClient: SupabaseClient<Database>,
  id: number
) {
  return await supabaseClient
    .from("products")
    .select("id, name, price, url, average_rating")
    .eq("id", id)
    .limit(1)
    .single();
}

export async function getProductsByUserId(
  supabaseClient: SupabaseClient<Database>,
  uuid: string
) {
  return await supabaseClient
    .from("products")
    .select("id, name, price, url, average_rating")
    .eq("profile_id", uuid);
}

export async function addProduct(
  supabaseClient: SupabaseClient<Database>,
  product: ProductsInsert
) {
  return await supabaseClient.from("products").insert(product).select();
}

export async function addToCart(
  supabaseClient: SupabaseClient<Database>,
  cartItem: CartProductsInsert
) {
  return await supabaseClient.from("cart_products").insert(cartItem).select();
}

export async function checkOutCart(
  supabaseClient: SupabaseClient<Database>,
  productIds: number[],
  shippingAddressId: number
) {
  const { data: products, error: productsError } = await supabaseClient
    .from("cart_products")
    .select()
    .filter("id", "in", `(${productIds.toString()})`);
  if (productsError) return { data: null, error: productsError };
  const { data: order, error: orderError } = await supabaseClient
    .from("orders")
    .insert({
      shipping_address_id: shippingAddressId,
      status: "pending payment",
    })
    .select();
  if (orderError) return { data: null, error: orderError };

  const newProducts: LineItemsInsert[] = products?.map((product) => ({
    cart_prod_id: product.id,
    order_id: order[0].id,
  }));

  return await supabaseClient.from("line_items").insert(newProducts).select();
}
