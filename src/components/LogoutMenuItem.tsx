"use client";

import { signOut } from "@/actions";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useTransition } from "react";

export default function LogoutMenuItem() {
  let [, startTransition] = useTransition();
  return (
    <DropdownMenuItem onClick={() => startTransition(signOut)}>
      <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
      Log out
    </DropdownMenuItem>
  );
}
