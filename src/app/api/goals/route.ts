import db from "@/db/config";
import { goals } from "@/db/schema";
import { Goal } from "@/lib/types";
import { goalSchemaValidation } from "@/lib/validations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const goalItems: Goal[] = await db.select().from(goals);
    return NextResponse.json(goalItems);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Can't fetch the data" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();
  const parsedBody = goalSchemaValidation.safeParse(body);
  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error }, { status: 422 });
  }

  const { title, description, priority, deadline, createdAt, user_id } =
    parsedBody.data;

  try {
    const goalItem = await db
      .insert(goals)
      .values({ title, description, priority, deadline, createdAt, user_id });
    console.log(goalItem);
    return NextResponse.json({ msg: "Goal created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error while creating goal" },
      { status: 500 },
    );
  }
}
