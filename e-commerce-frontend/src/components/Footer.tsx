

const Footer = () => {
  return (
    <footer className="flex justify-between border-t-1 border-gray-300 py-8 px-6 gap-6 md:px-44">
      <p className="text-gray-500">&copy; 2025 ShopEasy. All rights reserved.</p>
      <ul className="flex gap-3 text-[1rem] font-medium underline">
        <li className="hover:text-gray-600 cursor-pointer">Terms</li>
        <li className="hover:text-gray-600 cursor-pointer">Privacy</li>
        <li className="hover:text-gray-600 cursor-pointer">Contact</li>
      </ul>
    </footer>
  )
}

export default Footer