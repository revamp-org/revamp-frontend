import { UserButton } from "@clerk/nextjs";

export default function home() {
  return (
    <div>
      Home
      <UserButton />
    </div>
  );
}
