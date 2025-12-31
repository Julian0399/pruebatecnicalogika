import filter_alt from "../../assets/filter_alt.png";
import lupa from "../../assets/lupa.png";
import { useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";

const CategoriesActions = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between h-[40.5px]">
        <div className="flex items-center gap-8">
          <div className="relative">
            <img
              src={lupa}
              alt="Buscar"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            />
            <input
              placeholder="Buscar"
              className="border rounded pl-9 pr-4 py-2 w-64 h-10 bg-white text-[14px]
              focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button className="flex items-center gap-2 text-sm text-[#1E1B4D]">
            <img src={filter_alt} alt="Filtros" />
            Filtros
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-[#1E1B4D] text-white px-4 py-2 rounded h-10 text-[16px]"
        >
          Crear tipo de categoría
        </button>
      </div>

      <CreateCategoryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CategoriesActions;
