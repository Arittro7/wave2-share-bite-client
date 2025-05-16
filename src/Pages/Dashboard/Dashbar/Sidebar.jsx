import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-col gap-5 mb-2">
        <button>
          <li className="bg-[#9d174d] text-center text-white font-semibold p-2 rounded-md">
            <Link to="/my-order">ORDER</Link>
          </li>
        </button>
      </ul>
      <ul className="flex flex-col gap-5 mb-2">
        <button>
          <li className="bg-[#9d174d] text-center text-white font-semibold p-2 rounded-md">
            <Link to="/purchase">PURCHASE</Link>
          </li>
        </button>
      </ul>
      <ul className="flex flex-col gap-5 mb-2">
        <button>
          <li className="bg-[#9d174d] text-center text-white font-semibold p-2 rounded-md">
            <Link to="/product">PRODUCT DETAILS</Link>
          </li>
        </button>
      </ul>
      <ul className="flex flex-col gap-5 mb-2">
        <button>
          <li className="bg-[#9d174d] text-center text-white font-semibold p-2 rounded-md">
            <Link to="/add-product">ADD PRODUCT</Link>
          </li>
        </button>
      </ul>
      <ul className="flex flex-col gap-5 mb-2">
        <button>
          <li className="bg-[#9d174d] text-center text-white font-semibold p-2 rounded-md">
            <Link to="/update">UPDATE PRODUCT</Link>
          </li>
        </button>
      </ul>
      <ul className="flex flex-col gap-5 mb-2">
        <button>
          <li className="bg-[#9d174d] text-center text-white font-semibold p-2 rounded-md">
            <Link to="/my-profile">MY PROFILE</Link>
          </li>
        </button>
      </ul>
      <div>
        <img className="mt-12 rounded-lg" src={logo} alt="" />
        <p className="text-4xl uppercase text-[#9d174d] text-center font-bold mr-2">Share Bite</p>
        <p className="text-center mr-2 text-lg text-[#e6950c]">Connection of every bite.</p>
      </div>
    </div>
  );
};

export default Sidebar;
