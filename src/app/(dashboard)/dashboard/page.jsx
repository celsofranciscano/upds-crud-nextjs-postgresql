import LinkButton from "@/components/common/LinkButton";

export default function DashboardPage() {
  return (
    <main className="bg-zinc-900 rounded-md p-4 grid gap-4">
      <h1 className="text-4xl text-center text-white font-medium">Administracion de puntajes de las partidas de los jugadores</h1>
      <p className="text-center">Este sistema es para hacer resgistros y actualizar las tablas correspondientes segun el examen UPDS</p>

      <LinkButton href={"/dashboard/usuarios"} name={"Jugadores"}/>
      <LinkButton href={"/dashboard/partidas"} name={"Partidas"}/>
      <p className="">* Las puntuaciones estan dentro de cada partida, puedes ingresar a detalles de partida</p>
      <p className="">* Cuando hagas cambios hay que recargar la pagina</p>
    </main>
  );
}
