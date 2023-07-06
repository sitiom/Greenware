import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UsersResponseItem } from "@/lib/queries";
import Link from "next/link";

interface StoreCardProps {
  user: UsersResponseItem;
}

export default function StoreCard({ user }: StoreCardProps) {
  return (
    <Card className="h-full overflow-hidden rounded-sm border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <img
          src={user.avatar_url ?? "https://github.com/shadcn.png"}
          alt="Avatar"
        />
        <CardTitle>{user.full_name}</CardTitle>
        <CardDescription>Welcome to my store!</CardDescription>
      </CardHeader>
      <CardFooter className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <Button
          className="inline-flex w-full items-center justify-center"
          asChild
        >
          <Link href={`/user/${user.id}`}>View store</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
