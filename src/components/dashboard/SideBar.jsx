"use client";
// components/SideBar.js
import Link from "next/link";
import { signOut } from "next-auth/react";
// import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "@/components/common/NavLink";

function SideBar() {
  const pathname = usePathname();

  const isActive = "/dashboard" === pathname;

  const { data: session } = useSession();

  function handlebtnclick() {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    // document.getElementById("capa-sidebar")?.classList.toggle("hidden");
  }

  function btnclickperfil() {
    document.getElementById("card-perfil")?.classList.toggle("hidden");
  }



  return (
    <>
      <header className="bg-white dark:bg-zinc-900 h-16 shadow-sm dark:text-white fixed w-full flex items-center justify-between px-4 md:px-8">
        <a className="flex gap-1 items-center" href="/dashboard">
          {/* <img className="w-8" src="/logo.png" alt="logo sneakers" /> */}
          <span className="text-2xl font-extrabold dark:text-white text-black">
            UPDS GAME
          </span>
        </a>

        <div className="flex items-center justify-center gap-4">
          {session?.user?.image ? (
            <Image
              onClick={btnclickperfil}
              className="w-9 h-9 rounded-full cursor-pointer"
              src={session?.user?.image}
              width={24}
              height={24}
              alt="perfil"
            />
          ) : (
            <div
              onClick={btnclickperfil}
              className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"
            >
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
              <h1 className="text-center text-xl"></h1>
            </div>
          )}

          <button
            onClick={handlebtnclick}
            className="md:hidden bg-zinc-100 dark:bg-zinc-800 rounded-full p-0.5"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-zinc-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        onClick={handlebtnclick}
        id="capa-sidebar"
        className="hidden bg-zinc-900 h-screen top-16 fixed w-full dark:opacity-60 opacity-30"
      ></div>

      <aside
        id="sidebar"
        className="bg-white  dark:bg-zinc-900 w-72 md:w-60 border-r dark:border-none h-screen dark:text-white text-black fixed top-16 hidden md:block px-4 py-8"
      >
        <nav>
          <ul className="grid pt-8 font-medium">
            <li
              className={`hover:text-blue-500 rounded-md px-4 py-2 ${
                isActive ? "text-blue-500" : ""
              }`}
              onClick={handlebtnclick}
            >
              <Link href={"/dashboard"} className="flex items-center gap-3">
                Inicio
              </Link>
            </li>

            <NavLink
              path="/dashboard/usuarios"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Jugadores"}
            />

            <NavLink
              path="/dashboard/partidas"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Partidas"}
            />
          </ul>
        </nav>
        <button
          onClick={() => signOut()}
          className="text-red-500 flex absolute md:bottom-20 bottom-36 items-center gap-3 hover:bg-blue-200 dark:hover:bg-zinc-800 px-4 py-2 rounded-md"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
            />
          </svg>
          <span>Cerrar sesión</span>
        </button>
      </aside>

      <div
        id="card-perfil"
        className="fixed hidden w-fit h-fit bg-white text-sm dark:bg-zinc-900 rounded-b-md top-16 right-4 p-4 md:right-10 shadow-md"
      >
        <div className="flex items-center">
          {session?.user?.image ? (
            <Image
              width={40}
              height={40}
              className="w-10 m-auto h-10 rounded-full"
              src={session.user.image}
              alt="profile image"
            />
          ) : (
            <div className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
            </div>
          )}

          <div className="p-2">
            <p className="text-white">{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        </div>
        <ul onClick={btnclickperfil} className="grid gap-2">
      

          <li onClick={() => signOut()} className="cursor-pointer">
            <button className="text-red-500 flex items-center">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
              <span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
