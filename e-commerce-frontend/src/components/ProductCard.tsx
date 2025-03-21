import { LuShoppingCart } from "react-icons/lu";

export interface Props {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}


const ProductCard = ({ title, price, description, category, image }: Props) => {
  return (
    <div className="inline-flex flex-col border-1 border-gray-200 rounded-2xl pb-4 h-full">
      <section className="rounded-t-2xl h-[20rem]">
        <img className="rounded-t-2xl w-full h-full object-contain py-4" src={image} alt="Imagen del producto" />
      </section>
      <section className="px-4 border-t-1 border-gray-200 flex flex-col flex-grow">
        <div className="mt-4 flex justify-between gap-4">
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-gray-500 mt-2">{category}</p>
          </div>
          <span className="text-xl font-bold">${price}</span>
        </div>
        <p className="mt-6 flex-grow text-gray-500">{description}</p>
        <button className="hover:cursor-pointer bg-black min-w-full mt-4 text-white py-2 rounded-lg flex justify-center gap-3 items-center font-medium">
          <LuShoppingCart className="text-lg"/> Add to cart
        </button>
      </section>
    </div>
  );
};

export default ProductCard;
