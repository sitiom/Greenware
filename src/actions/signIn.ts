"use server";

import { env } from "@/env.mjs";
import { Database } from "@/lib/database.types";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn() {
  const supabase = createServerActionClient<Database>({ cookies });

  const redirectUrl = `${
    env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? `https://${env.NEXT_PUBLIC_VERCEL_URL}`
      : env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  }/auth/callback`;

  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUrl,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}
