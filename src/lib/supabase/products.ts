import { createSupabaseServerClient } from "./server";
import type { Product } from "./types";

export async function getProductByProductId(productId: string): Promise<Product | null> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("product_id", productId)
    .eq("status", "Active")
    .maybeSingle();

  if (error) {
    console.error(`Supabase product lookup failed for "${productId}":`, error.message);
    return null;
  }

  return data;
}
