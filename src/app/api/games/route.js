import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const games = await prisma.tbgames.findMany();

    return NextResponse.json(games);
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
    const { FK_user, totalScore, level } = await request.json();
    console.log("Datos recibidos:", { FK_user, totalScore, level });


    const newGame = await prisma.tbgames.create({
      data: {
        FK_user: Number(FK_user),
        totalScore: Number(totalScore),
        level : Number(level)
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
