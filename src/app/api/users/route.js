import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.tbusers.findMany({
      where:{
        FK_role:67483231
      }
    }
    );
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}


