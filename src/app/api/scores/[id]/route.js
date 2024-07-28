import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET(request, { params }) {
  try {
  
   const score = await prisma.tbscores.findMany({
      where: {
        FK_game: Number(params.id),
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

export async function PATCH(request, { params }) {
  try {
    const { partialScore, typeScore } = await request.json();
    console.log(partialScore,typeScore)
    console.log(params.id);
    const editScore = await prisma.tbscores.update({
      where: {
        PK_score: Number(params.id),
      },
      data: {
        partialScore:Number(partialScore),
        typeScore
      },
    });
    return NextResponse.json(editScore);
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
