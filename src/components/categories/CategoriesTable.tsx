import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { useEffect } from "react";
import { fetchDashboardData } from "../../store/slices/dashboardReducer";
import type { Category } from "../../types/dashboard";
import editar from "../../assets/editar.png";
import union from "../../assets/union.png";
import caneca from "../../assets/caneca.png";

const CategoriesTable = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Cargando categorías...
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mt-8">
      <table className="w-full text-left text-[14px] text-[#656268]">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="p-2 border-r">Nombre</th>
            <th className="p-2 border-r">Icono</th>
            <th className="p-2 border-r">Estado</th>
            <th className="p-2 border-r">Descripción</th>
            <th className="p-2 border-r">Fecha de creación</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-6 text-center text-gray-400">
                No hay categorías registradas
              </td>
            </tr>
          ) : (
            data.map((category: Category) => (
              <tr
                key={category.id}
                className=" hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium text-gray-900">
                  {category.name}
                </td>

                <td>
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-8 h-8 rounded"
                  />
                </td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      category.status === 1
                        ? "bg-[#D2E5D0] text-[#0B8A00]"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {category.status === 1 ? "Activo" : "Inactivo"}
                  </span>
                </td>

                <td className="max-w-[300px] truncate">
                  {category.description}
                </td>

                <td>
                  {new Intl.DateTimeFormat("es-ES", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(category.createdAt))}
                </td>

                <td className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button className="hover:opacity-70 transition">
                      <img src={editar} alt="Editar" className="w-4 h-4" />
                    </button>

                    <button className="hover:opacity-70 transition">
                      <img src={caneca} alt="Eliminar" className="w-4 h-4" />
                    </button>

                    <button className="hover:opacity-70 transition">
                      <img src={union} alt="Union" className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default CategoriesTable;
