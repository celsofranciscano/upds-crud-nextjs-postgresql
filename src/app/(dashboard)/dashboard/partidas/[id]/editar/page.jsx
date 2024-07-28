"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function EditAdministratorPage({ params }) {
  const [game, setGame] = useState();

  useEffect(() => {
    async function getGame() {
      const response = await axios.get(`/api/games/${params.id}`);
      setGame(response.data);
    }
    getGame();
  }, [params.id]);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.patch(`/api/games/${params.id}`, data);

    if (response.status === 200) {
      router.refresh();
      router.push("/dashboard/partidas")
    }


  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">Editar partida</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Total puntos
          <input
            type="number"
            defaultValue={game?.totalScore}
            className="input-dark"
            {...register("totalScore", {
              required: {
                value: true,
                message: "El total puntos es obligatorio",
              },
            })}
          />
          {errors.totalScore && (
            <span className="text-red-500 text-sm">
              {errors.totalScore.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Nivel
          <input
            type="number"
            defaultValue={game?.level}
            className="input-dark"
            {...register("level", {
              required: {
                value: true,
                message: "El nivel es obligatorio",
              },
            })}
          />
          {errors.level && (
            <span className="text-red-500 text-sm">{errors.level.message}</span>
          )}
        </label>

        <ButtonSubmit name={"Guardar cambios"} />
      </form>
    </section>
  );
}

export default EditAdministratorPage;
