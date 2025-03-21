import { useEffect, useState } from "react"
import ProductCard, { Props } from "./ProductCard"
import axios from "axios"

const URL = 'https://fakestoreapi.com/products?limit=5'

const Products = () => {
  const [data, setData] = useState<Props[]>([])

  useEffect(() => {
    axios.get(URL)
    .then((response) => setData(response.data))
    .catch(error => console.log(error))
  },[])

  return (
    <main id="products" className="px-4">
      <h1 className="text-3xl font-extrabold text-center xl:text-5xl xl:mt-40">Featured products</h1>
      <h3 className="text-center text-gray-500 mt-2 px-3">Explore our more populars items handpicked for you</h3>
      <div className="flex gap-8 flex-col mt-14 xl:grid xl:grid-cols-3 xl:px-64 md:grid md:grid-cols-2 md:px-6">
        {data && data.map((product) => (
          <ProductCard id={product.id} category={product.category} description={product.description} image={product.image} price={product.price} title={product.title}/>
        ))}
      </div>
    </main>
  )
}

export default Products