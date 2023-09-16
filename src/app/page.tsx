import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-[var(--container-width)] bg-secondary">
      hello world
      <UserButton afterSignOutUrl="/sign-in " />
    </div>
  );
}
