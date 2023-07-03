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
  const {data, error} = await supabase.from("products").insert({id: count! + 1, ...product});
  return {data, error};
}
