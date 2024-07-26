"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import DangerAlert from "@/components/common/alerts/DangerAlert";
function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      setErrorMessage(response.error);
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {}
  });

  return (
    <div className=" flex flex-col   items-center  pt-8 justify-center ">
      <a href="/" className="flex items-center gap-4">
        {/* <img className="w-10" src="/logo.png" alt="logo sneakers" /> */}
        <h1 className="font-bold">UPDS</h1>
      </a>
      <h1 className="text-2xl font-bold my-4">Iniciar Sesion</h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4   py-4  md:w-1/3 w-full"
      >
        {errorMessage && <DangerAlert message={errorMessage} />}
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

        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold rounded-md py-2">
          Iniciar Sesion
        </button>
      </form>

      <div className="text-blue-400 text-sm flex py-4 gap-4">
        <Link href={"register"}>Crear Cuenta</Link>
        <span className="text-black"> ó</span>
        <Link href={"#"}>Recuperar contraseña</Link>
      </div>
    </div>
  );
}

export default LoginPage;
