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
          <h1 className="font-medium text-2xl text-black dark:text-white">
            Total puntos: {game.totalScore}
          </h1>
          <p> Nivel {game.level}</p>
          <p> FK DE USUARIO: {game.FK_user}</p>
          <p> PK DE PARTIDA: {game.PK_game}</p>
          {game.status && (
            <span className="bg-blue-500 text-white text-sm px-2 rounded-md">
              Activo
            </span>
          )}
        </div>
      </div>

      <section className=" grid gap-4">
        <div className=" flex items-center justify-between ">
          <h1 className="text-2xl font-medium text-white">PUNTUACION</h1>
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
