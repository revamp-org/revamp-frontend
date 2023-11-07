import { auth } from "@clerk/nextjs";
export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new Response("You are unauthorized", { status: 401 });
  }

  return new Response("Hello, world!");
}
