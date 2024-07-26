"use client";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function NewClientPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("/api/auth/register", data);

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-white font-medium text-2xl pb-8">
        Añadir nuevo jugador
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md: grid-cols-3"
      >
        <label className="flex flex-col gap-1">
          Nombre
          <input
            type="text"
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
        <label className="flex flex-col gap-1">
          Email
          <input
            type="email"
            className="input-dark"
            {...register("email", {
              required: {
                value: true,
                message: "El email es obligatorio",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input
            type="password"
            className="input-dark"
            {...register("password", {
              required: {
                value: true,
                message: "El password es obligatorio",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Confirmar password
          <input
            type="password"
            className="input-dark"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "La confirmacion es obligatoria",
              },
              validate: (ConfirmPassword) => {
                if (ConfirmPassword === watch("password")) {
                  return true;
                } else return "No coincide el password";
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <ButtonSubmit name={"Añadir nuevo jugador"} />
      </form>
    </section>
  );
}

export default NewClientPage;
