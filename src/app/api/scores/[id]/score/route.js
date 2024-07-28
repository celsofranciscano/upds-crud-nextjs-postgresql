import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET(request, { params }) {
  try {
  
   const score = await prisma.tbscores.findUnique({
      where: {
        PK_score: Number(params.id),
      },
    });
    return NextResponse.json(score);
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