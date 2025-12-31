import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreateCategoryModal = ({ open, onClose }: Props) => {
  const [isActive, setIsActive] = useState(true);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-lg w-[480px] p-6 z-10">
        <h2 className="text-xl font-semibold text-[#1E1B4D] mb-6">
          Crear categoría
        </h2>

        <form className="space-y-5">
          <div className="flex flex-col gap-1">
            <label className="text-[14px] font-medium">
              Nombre de la categoría*
            </label>
            <input
              type="text"
              placeholder="Escribe el nombre de la buena acción"
              className="
                w-full h-10
                border border-[#8F8D93] rounded
                px-3
                text-[14px]
                focus:outline-none focus:ring-2 focus:ring-gray-500
              "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[14px] font-medium">
              Descripción de la buena acción*
            </label>
            <textarea
              placeholder="Agregar descripción"
              rows={3}
              className="
                w-full
                border border-[#8F8D93] rounded
                px-3 py-2
                text-[14px]
                resize-none
                focus:outline-none focus:ring-2 focus:ring-gray-500
              "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[14px] font-medium">Logo*</label>
            <textarea
              placeholder="Cargar archivo"
              rows={3}
              className="
                w-full
                border border-[#8F8D93] rounded
                px-3 py-2
                text-[14px]
                resize-none
                focus:outline-none focus:ring-2 focus:ring-gray-500
              "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[14px] font-medium">Color*</label>
            <textarea
              placeholder="Registra color codigo HEX"
              rows={3}
              className="
                w-full
                border border-[#8F8D93] rounded
                px-3 py-2
                text-[14px]
                resize-none
                focus:outline-none focus:ring-2 focus:ring-gray-500
              "
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`
      relative inline-flex h-6 w-11 items-center rounded-full
      transition-colors duration-200 border border-[#01BABB]
      ${isActive ? "bg-[#EAFFFF]" : "bg-gray-300"}
    `}
            >
              <span
                className={`
        inline-block h-4 w-4 transform rounded-full bg-[#01BABB]
        transition-transform duration-200
        ${isActive ? "translate-x-6" : "translate-x-1"}
      `}
              />
            </button>

            <span
              className={`text-[14px] font-medium ${
                isActive ? "text-[#1E1B4D]" : "text-gray-500"
              }`}
            >
              {isActive ? "Activo" : "Inactivo"}
            </span>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="
                w-[206px] h-10
                rounded border
                text-[14px]
                flex items-center justify-center
                "
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                w-[206px] h-10
                rounded
                bg-gray-400 text-white
                text-[14px]
                flex items-center justify-center
                "
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal;
