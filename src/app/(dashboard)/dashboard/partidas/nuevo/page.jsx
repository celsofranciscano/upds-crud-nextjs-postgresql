"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function NewGamePage() {
  const [user, setUser] = useState();
  useEffect(() => {
    async function getuser() {
      const response = await axios.get("/api/users");
      setUser(response.data);
    }
    getuser();
  }, []);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("/api/games", data);
    console.log(data)
    console.log(response)

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">
        Añadir nueva partida
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md: grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Total puntos
          <input
            type="number"
            autoFocus
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
            className="input-dark"
            {...register("level", {
              required: {
                value: true,
                message: "El nivel es obligatorio",
              },
            })}
          />
          {errors.level && (
            <span className="text-red-500 text-sm">
              {errors.level.message}
            </span>
          )}
        </label>
      

        <label className="flex flex-col gap-1">
          Jugador
          <select
            className="input-dark"
            {...register("FK_user", {
              required: {
                value: true,
                message: "El usuario es obligatorio",
              },
            })}
          >
            {user?.map((user) => (
              <option key={user.PK_user} value={user.PK_user}>
                {user.firstName}    {user.lastName}
              </option>
            ))}
          </select>
          {errors.FK_user && (
            <span className="text-red-500 text-sm">
              {errors.FK_user.message}
            </span>
          )}
        </label>
   
        <ButtonSubmit name={"Añadir nueva partida"} />
      </form>
    </section>
  );
}

export default NewGamePage;
