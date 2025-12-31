import { NavLink } from "react-router-dom";
import BackgroundSidebar from "../../assets/BackgroundSidebar.png";
import home from "../../assets/home.png";
import Vector from "../../assets/Vector.png";
import pesos from "../../assets/pesos.png";
import storefront from "../../assets/storefront.png";
import Logros from "../../assets/Logros.png";
import content_copy from "../../assets/content_copy.png";
import groups from "../../assets/groups.png";
import category from "../../assets/category.png";
import Logout from "../../assets/Logout.png";

export const Sidebar = () => {
  return (
    <aside className="w-57.5  bg-white shadow-md flex flex-col">
      <nav className="flex-1 flex flex-col">
          <img
            src={BackgroundSidebar}
            alt="Background"
            className="w-full h-auto mb-4"
          />
          <div className="flex flex-col gap-1 pt-4 w-full">
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 px-4 hover:bg-[#EAFFFF] border-l-2 border-[#01BABB] rounded"
            >
              <img src={home} alt="Inicio" className="w-5 h-5" />
            <span >Inicio</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={Vector} alt="Icono Crecimiento" className="w-5 h-5" />
            <span >Impacto Social</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={groups} alt="Icono Comunidad" className="w-5 h-5" />
            <span >Comunidad</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={pesos} alt="Icono Pesos" className="w-5 h-5" />
            <span >Sponsors</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={storefront} alt="Icono Marketplace" className="w-5 h-5" />
            <span >Marketplace</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={Logros} alt="Icono Logros" className="w-5 h-5" />
            <span >Bakanes</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={content_copy} alt="Icono Contenidos" className="w-5 h-5" />
            <span >Contenidos</span>
            </NavLink>
            <NavLink
              to="/notfound"
              className="flex items-center gap-3 text-[#28272A] font-medium h-13 hover:bg-[#EAFFFF] px-3 py-2 rounded"
            >
              <img src={category} alt="Icono Categorias de acciones" className="w-5 h-5" />
            <span >Categorias de acciones</span>
            </NavLink>
          </div>
      </nav>
      <button className="mb-6 flex items-center justify-center gap-2 text-[#1E1B4D] font-medium cursor-pointer p-4 hover:bg-gray-300">
        <img src={Logout} alt="Icono Cerrar sesión" className="w-5 h-5 mr-2"/>
            Cerrar sesión
      </button>
    </aside>
  );
};
