import CategoriesTabs from "../components/categories/categoriesTabs";
import CategoriesActions from "../components/categories/CategoriesActions";
import CategoriesTable from "../components/categories/CategoriesTable";



const Dashboard = () => {
  return (
    <div className="text-2xl font-bold text-black p-6 ">
      <h1 className="text-4xl mb-4">
        Categorias
      </h1>
      <CategoriesTabs />
      <CategoriesActions />
      <CategoriesTable  />
    </div>
  )
}

export default Dashboard
