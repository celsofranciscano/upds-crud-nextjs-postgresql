
import Table from "@/components/common/Table";
import LinkButton from "@/components/common/LinkButton";

function GamePage() {
  const columns = [
    "Nº",
    "ID",
    "ID JUGADOR",
    "Total puntos",
    "nivel",
    "Acciones",
  ];
  const rows = ["PK_game", "FK_user", "totalScore", "level"];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Partidas</h1>
        <LinkButton
          href={"/dashboard/partidas/nuevo"}
          name={"Nueva partida"}
        />
      </div>
      <Table
        columns={columns}
        rows={rows}
        url={"games"}
        pathname={"partidas"}
      />
    </section>
  );
}

export default GamePage;
