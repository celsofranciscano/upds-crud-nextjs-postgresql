import axios from "axios";
import Table from "@/components/common/Table";
import LinkButton from "@/components/common/LinkButton";

async function DetailGamePage({ params }) {
  let game;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/games/${params.id}`
    );

    game = response.data;
  } catch (error) {}

  let user;

  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/users/${game?.FK_user}`
    );
    user = response.data;
  } catch (error) {}

  const columns = [
    "Nº",
    "ID",
    "ID PARTIDA",
    "Puntaje parcial",
    "Tipo de puntuacion",
    "Acciones",
  ];
  const rows = ["PK_score", "FK_game", "partialScore", "typeScore"];

  return (
    <section className="rounded-md bg-white dark:bg-zinc-900  p-4 ">
      <div className="flex gap-4">
        <div className="">
          <p className="font-medium text-2xl  ">Jugador:</p>
          <p className="font-medium text-2xl text-black dark:text-white">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="font-medium text-2xl  ">Partida:</p>
          <div className="flex justify-center gap-8  items-center font-medium text-2xl text-black dark:text-white">
            <p>ID Partida: {game.PK_game}</p>
            <p>Total Puntos: {game.totalScore}</p>
            <p>Nivel: {game.level}</p>
          </div>

        </div>
      </div>

      <section className=" grid gap-4">
        <div className=" flex items-center justify-between ">
          <h1 className="text-2xl font-medium ">Puntuaciones: </h1>
          <p>* No aparece la puntuacion? recarga la pagina</p>
          <LinkButton href={"detalle/nuevo"} name={"Nueva puntuacion"} />
        </div>
        <Table
          columns={columns}
          rows={rows}
          url={`scores/${params.id}`}
          pathname={"detalle"}
        />
      </section>
    </section>
  );
}

export default DetailGamePage;
