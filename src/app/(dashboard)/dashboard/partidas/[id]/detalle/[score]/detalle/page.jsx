import axios from "axios";

async function DetailScorePage({ params }) {
  let score;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/scores/${params.score}/score`
    );

    score = response.data;
  } catch (error) {}
  return (
    <section className="rounded-md bg-white dark:bg-zinc-900  p-4 ">
      <div className="flex gap-4">
    
        <div className=" grid gap-4">
          <h1 className="font-medium text-2xl text-black dark:text-white">
            ID Puntuacion:{score.PK_score} 
          </h1>
          <h1 className="font-medium text-2xl text-black dark:text-white">
            ID Partida:{score.FK_game} 
          </h1>
          <h1 className="font-medium text-2xl text-black dark:text-white">
            Puntaje parcial: {score.partialScore} 
          </h1>
          <h1 className="font-medium text-2xl text-black dark:text-white">
            Tipo de puntuacion: {score.typeScore} 
          </h1>
          <p>{score.email}</p>
          {score.status && (
            <span className="bg-blue-500 text-white text-sm px-2 rounded-md">
              Activo
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailScorePage;
