"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function signOut() {
  const supabase = createServerActionClient({ cookies });
  await supabase.auth.signOut();
  revalidatePath("/");
}
