import Table from "@/components/common/Table";
import LinkButton from "@/components/common/LinkButton";
function UsersPage() {
  const columns = [
    "Nº",
    "ID",
    "Nombre",
    "Apellido",
    "Email",
    "Acciones",
  ];
  const rows = ["PK_user", "firstName", "lastName", "email"];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Jugadores</h1>

        <LinkButton href={"/dashboard/usuarios/nuevo"} name={"Nuevo jugador"} />
      </div>
      <Table columns={columns} rows={rows} url={"users"} pathname={"usuarios"}/>
    </section>
  );
}

export default UsersPage;
