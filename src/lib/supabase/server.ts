import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Product lookups are public, read-only, and keyed by product_id. There's
 * no user session involved, so a plain server-side client (no cookie/auth
 * plumbing) is enough here.
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (see .env.local.example)."
    );
  }

  return createClient<Database>(url, key, {
    auth: { persistSession: false },
  });
}
