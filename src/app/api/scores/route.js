import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const score = await prisma.tbscores.findMany();

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

export async function POST(request) {
  try {
    const { FK_game, partialScore, typeScore } = await request.json();

    const newGame = await prisma.tbscores.create({
      data: {
        FK_game: Number(FK_game),
        partialScore: Number(partialScore),
        typeScore,
      },
    });

    return NextResponse.json(newGame);
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
