"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function EditScorePage({ params }) {
  const [game, setGame] = useState();
  console.log(params)
  useEffect(() => {
    async function getuser() {
      const response = await axios.get(`/api/scores/${params.score}/score`);
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
    const response = await axios.patch(`/api/scores/${params.score}`, data);
   

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">
        editar puntuacion
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md: grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Puntaje parcial
          <input
            type="number"
            defaultValue={game?.partialScore}
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
            defaultValue={game?.typeScore}
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

    

        <ButtonSubmit name={"editar  puntuacion"} />
      </form>
    </section>
  );
}

export default EditScorePage;
