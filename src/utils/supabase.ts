import {createClient} from "@supabase/supabase-js"
import { Database } from "@/lib/database.types"
import { env } from "@/env.mjs"

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
