import db from "@/db/config";
import { goals } from "@/db/schema";
import { Goal } from "@/lib/types";
import { goalSchemaValidation } from "@/lib/validations";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const goalItem: Goal[] = await db
    .select()
    .from(goals)
    .where(eq(goals.id, params.id));

  return NextResponse.json({ goalItem });
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const body = await req.json();

  const parsedBody = goalSchemaValidation.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error }, { status: 422 });
  }

  const { title, description, priority } = parsedBody.data;

  try {
    const updatedGoal = await db
      .update(goals)
      .set({ title, description, priority })
      .where(eq(goals.id, params.id));
    console.log(updatedGoal);
    return NextResponse.json(
      { msg: "Goal updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error while updating goal" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextResponse,
  { params }: { params: { id: number } },
) {
  try {
    const removedGoal = await db.delete(goals).where(eq(goals.id, params.id));
    console.log(removedGoal);
    return NextResponse.json(
      {
        msg: "Goal deleted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error while deleting goal" },
      { status: 500 },
    );
  }
}
