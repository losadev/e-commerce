interface Props {
  icon: string
  name:string
}

const CategoryCard = ({icon, name}:Props) => {
  return (
    <div className="hover:cursor-pointer relative flex place-items-center place-content-center h-[15em] w-[25em] mt-18 rounded-lg shadow-md duration-200 overflow-hidden group">
      <span className="text-4xl">{icon}</span>
      <div className="absolute inset-0 bg-gray-500 flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-extrabold">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;
