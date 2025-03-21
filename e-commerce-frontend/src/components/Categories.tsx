import CategoryCard from "./CategoryCard"


const Categories = () => {
  return (
    <div id="categories" className="bg-gray-100 py-30 mt-32">
      <h1 className="text-center text-5xl font-extrabold">Shop by Category</h1>
      <p className="text-center text-xl text-gray-500 mt-4">Browse our collections by category to find exactly what you're looking for.</p>
      <section className="justify-center gap-4 sm:grid sm:grid-cols-2 sm:justify-center place-items-center sm:gap-1 place-content-center grid grid-cols-1 lg:flex lg:gap-4"> 
        <CategoryCard icon={"👕"} name="Clothing"/>
        <CategoryCard icon={"💎"} name="Jewelry"/>
        <CategoryCard icon={"🛍️"} name="Bags"/>
      </section>
    </div>
  )
}

export default Categories