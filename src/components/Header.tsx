import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  console.log(location);

  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className=" w-32" src="/logo.svg" alt="Logotipo" />
          </div>
          <nav className="flex gap-4 text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
