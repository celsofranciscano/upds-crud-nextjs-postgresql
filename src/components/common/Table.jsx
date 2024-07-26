import Edit from "./Edit";
import Detail from "./Detail";
import axios from "axios";

async function Table({ url, columns, rows, pathname }) {
  let response;
  let data = [];

  console.log(url)
  console.log(data)

  try {
    response = await axios.get(`${process.env.URL_API}/api/${url}`);
    data = response.data;
    console.log(response)


    if (data.length === 0) {
      return <div className="p-4 rounded-md">No se encontraron datos</div>;
    }
  } catch (error) {
    return (
      <div className="p-4 rounded-md">
        No se encontro data
      </div>
    );
  }

  return (
    <section className="  overflow-x-auto shadow-md rounded-md bg-white dark:bg-zinc-900">
      <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs  text-zinc-700 uppercase bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">
          <tr>
            {columns.map((column, index) => (
              <th className="px-6 py-3" key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className=" border-b  dark:border-zinc-800">
              <td className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </td>
              {rows.map((rowField, rowIndex) => (
                <td key={rowIndex} className="px-6 py-4">
                  {row[rowField]}
                </td>
              ))}
              <td className="flex gap-2 px-6 py-4">
                <Edit href={`${pathname}/${row[rows[0]]}/editar`} />
                <Detail href={`${pathname}/${row[rows[0]]}/detalle`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
