"use client";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("/api/auth/register", data);
    console.log(response.data);
    console.log(data);

    if (response.status === 200) {
      router.push("/");
    }
  });
  return (
    <div className=" flex flex-col   items-center   justify-center ">
      <a href="/" className="flex items-center gap-4">
        <img
          className="w-10"
          src="/logo.png"
          alt="logo sneakers"
        />
        <h1 className="font-bold">Sneakers</h1>
      </a>
      <h1 className="text-2xl font-bold my-2">Crear cuenta</h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4   py-4  md:w-1/3 w-full"
      >
        <div className="grid md:grid-cols-2 gap-2">
          <div className="grid gap-4">
            <label htmlFor="firstName">Nombre </label>

            <input
              autoFocus
              className="input-ligth"
              type="firstName"
              id="firstName"
              placeholder="Escribe tu nombre"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
              })}
            />
            {errors.firstName && (
              <span className="text-sm text-red-600">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="grid gap-4">
            <label htmlFor="lastName">Apellidos </label>

            <input
              autoFocus
              className="input-ligth"
              type="lastName"
              id="lastName"
              placeholder="Escribe tus apellidos"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Apellidos es requerido",
                },
              })}
            />
            {errors.lastName && (
              <span className="text-sm text-red-600">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <label htmlFor="email">Correo electronico </label>

        <input
          autoFocus
          className="input-ligth"
          type="email"
          id="email"
          placeholder="Escribe tu correo electronico"
          {...register("email", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
          })}
        />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}

        <label htmlFor="password">Contraseña </label>
        <input
          className="input-ligth"
          type="password"
          id="password"
          placeholder="Escribe tu contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Password requerido",
            },
          })}
        />
        {errors.password && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
        <label htmlFor="password">Confirmar Contraseña </label>
        <input
          className="input-ligth"
          type="confirmPassword"
          id="confirmPassword"
          placeholder="Confirma tu contraseña"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar password es requerido",
            },
            validate: (ConfirmPassword) => {
              if (ConfirmPassword === watch("password")) {
                return true;
              } else return "No coincide el password";
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-sm text-red-600">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold rounded-md py-2">
          Crear cuenta
        </button>
      </form>

      <div className="text-blue-400 text-sm flex py-4 gap-4">
        <Link href={"login"}>Iniciar sesion</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
