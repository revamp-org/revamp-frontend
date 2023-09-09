import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      hello world
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
