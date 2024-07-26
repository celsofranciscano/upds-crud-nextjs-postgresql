"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function EditClientPage({ params }) {
  const router = useRouter();
  const [user, setUser] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`/api/users/${params.id}`);
      setUser(response.data);
    }
    fetchUser();
  }, []);

  async function onSubmit(data) {
    const response = await axios.patch(`/api/users/${params.id}`, data);

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">
        Editar datos del jugador {user?.firstName}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md: grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Nombre
          <input
            type="text"
            defaultValue={user?.firstName}
            autoFocus
            className="input-dark"
            {...register("firstName", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
            })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Apellido
          <input
            type="text"
            defaultValue={user?.lastName}
            className="input-dark"
            {...register("lastName", {
              required: {
                value: true,
                message: "El apellido es obligatorio",
              },
            })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </label>

        <ButtonSubmit name={"Actualizar los datos del jugador"} />
      </form>
    </section>
  );
}

export default EditClientPage;
