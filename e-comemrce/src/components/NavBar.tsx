import { FiShoppingBag } from "react-icons/fi";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsScrolled(rect.bottom <= 0); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-w-full px-2 py-4 border-gray-300 border-b-1 fixed top-0 left-0 sm:px-10 md:px-20 lg:px-30 xl:px-40 2xl:px-60 z-10 transition-colors duration-300 
      ${isScrolled ? "bg-white/80 text-black" : "bg-white/20 text-white"}`}>
      <nav className="flex justify-between">
        <h1 className="text-xl font-bold">ShopEasy</h1>
        <ul className="flex gap-4 items-center font-semibold text-[.9rem]">
          <li className="hover:underline"><a href="#home">Home</a></li>
          <li className="hover:underline"><a href="#products">Product</a></li>
          <li className="hover:underline"><a href="#categories">Categories</a></li>
          <li className="hover:underline"><FiShoppingBag className="font-semibold text-[1.5rem]" /></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
