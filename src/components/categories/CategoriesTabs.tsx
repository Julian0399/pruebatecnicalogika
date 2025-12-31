const CategoriesTabs = () => {
    return(
    <div className="flex gap-6">
      <button className="pb-2  border-[#1E1B4D] font-bold text-black text-[16px] hover:border-b-2">
        Categorías
      </button>
      <button className="pb-2 text-[#656268] font-regular text-[16px]">
        Tipos
      </button>
      <button className="pb-2 text-[#656268] font-regular text-[16px]">
        Evidencias
      </button>
    </div>
    )
}

export default CategoriesTabs;