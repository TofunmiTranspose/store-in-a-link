import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Nav({ handleInputChange, side: [_, toggleSidebar], cart }) {
  const navigate = useNavigate();
  return (
    <nav className="flex sticky top-0 left-0 bg-white border-b-[1px] border-[#f3f3f3]/10 sm:border-none shadow shadow-gray-200/40 justify-between z-99 p-3 sm:p-5 items-center max-w-600">
      <div className="logo min-w-30 flex items-center gap-2 md:ml-5">
        <MdMenu
          onClick={() => toggleSidebar()}
          className="sm:hidden text-[1.8rem] text-gray-800"
        />
        <h1
          className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem] cursor-pointer font-bold text-gray-800"
          onClick={() => navigate("/")}
        >
          Love🛒
        </h1>
      </div>
      <div className="relative flex-grow max-w-md mx-4 lg:mx-8">
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Search for products..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[14px] text-gray-700 placeholder-gray-400"
        />
        <IoIosSearch className="absolute top-2 left-2 w-6 h-6 text-gray-600" />
      </div>

      <nav className="flex items-center space-x-1">
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 hidden sm:block"
        >
          <FiHeart className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
        >
          <FaRegUser className="w-6 h-6" />
        </a>
        <Link
          to={"/checkout"}
          className="text-gray-600 hover:text-blue-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 relative"
        >
          <AiOutlineShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10.5px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
            {cart.length}
          </span>
        </Link>
      </nav>
    </nav>
  );
}

export default Nav;
