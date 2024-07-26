import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET(request, { params }) {
  try {
    let game= [];
    game = await prisma.tbgames.findUnique({
      where: {
        PK_game: Number(params.id),
      },
    });
    return NextResponse.json(game);
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
    const { totalScore, level } = await request.json();
    const editGame = await prisma.tbgames.update({
      where: {
        PK_game: Number(params.id),
      },
      data: {
        totalScore: Number(totalScore),
        level : Number(level)
      },
    });
    return NextResponse.json(editGame);
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
