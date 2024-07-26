import axios from "axios";
import Image from "next/image";
async function DetailClientPage({ params }) {
  let user;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/users/${params.id}`
    );

    user = response.data;
  } catch (error) {}
  return (
    <section className="rounded-md bg-white dark:bg-zinc-900  p-4 ">
      <div className="flex gap-4">
        {user?.profileImage ? (
          <Image
            onClick={btnclickperfil}
            className="size-20 rounded-full cursor-pointer"
            src={user?.profileImage}
            width={24}
            height={24}
            alt="perfil"
          />
        ) : (
          <div className="size-20 text-4xl rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
            {user?.firstName?.charAt(0)?.toUpperCase() || ""}
            <h1 className="text-center text-xl"></h1>
          </div>
        )}

        <div className="">
          <h1 className="font-medium text-2xl text-black dark:text-white">
            {user.firstName} {user.lastName}
          </h1>
          <p>{user.email}</p>
          {user.status && (
            <span className="bg-blue-500 text-white text-sm px-2 rounded-md">
              Activo
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailClientPage;
