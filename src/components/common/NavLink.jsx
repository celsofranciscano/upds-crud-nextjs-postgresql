
import Link from "next/link";
function NavLink({ path, currentPath, name, onClick }) {
    const isActive = currentPath.startsWith(path);

    return (
      <li
        className={`hover:text-blue-500 rounded-md px-4 py-2 ${
          isActive ? "text-blue-500" : ""
        }`}
        onClick={onClick}
      >
        <Link href={path} >
          {name}
        </Link>
      </li>
    );
}

export default NavLink;