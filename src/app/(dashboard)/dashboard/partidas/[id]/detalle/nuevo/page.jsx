"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function NewScorePage({ params }) {
  const [game, setGame] = useState();
  useEffect(() => {
    async function getuser() {
      const response = await axios.get("/api/games");
      setGame(response.data);
    }
    getuser();
  }, []);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("/api/scores", {
      ...data,
      FK_game: params.id,
    });
    console.log(data);
    console.log(response);

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">
        Añadir nueva puntuacion
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md: grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Puntaje parcial
          <input
            type="number"
            autoFocus
            className="input-dark"
            {...register("partialScore", {
              required: {
                value: true,
                message: "El parcial de puntaje es obligatorio",
              },
            })}
          />
          {errors.partialScore && (
            <span className="text-red-500 text-sm">
              {errors.partialScore.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Tipo de partida
          <input
            type="text"
            className="input-dark"
            {...register("typeScore", {
              required: {
                value: true,
                message: "El nivel es obligatorio",
              },
            })}
          />
          {errors.typeScore && (
            <span className="text-red-500 text-sm">
              {errors.typeScore.message}
            </span>
          )}
        </label>

        {/* <label className="flex flex-col gap-1">
          Jugador
          <select
            className="input-dark"
            {...register("FK_game", {
              required: {
                value: true,
                message: "El usuario es obligatorio",
              },
            })}
          >
            {game?.map((game) => (
              <option key={game.PK_game} value={game.PK_game}>
                {game.totalScore}    
              </option>
            ))}
          </select>
          {errors.FK_game && (
            <span className="text-red-500 text-sm">
              {errors.FK_game.message}
            </span>
          )}
        </label> */}

        <ButtonSubmit name={"Añadir nueva puntuacion"} />
      </form>
    </section>
  );
}

export default NewScorePage;
