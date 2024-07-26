import Link from "next/link";
function LinkButton({ href ,name}) {
  return (
    <Link href={href} className="bg-blue-500 rounded-md py-2 px-4 text-white  hover:bg-blue-600 active:bg-blue-700  text-center">
      {name}
    </Link>
  );
}

export default LinkButton;
