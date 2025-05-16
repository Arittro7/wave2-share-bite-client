import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import userIcon from "../../../assets/user1.png";
import loginUser from "../../../assets/loginUser.png";
import sun from "../../../assets/sun.png";
import moon from "../../../assets/moon.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "forest" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  const handleProfileClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      setShowUserMenu((prev) => !prev);
    }
  };

  const profileImage = !user ? userIcon : user.photoURL || loginUser;

  return (
    <nav className="navbar bg-pink-800 text-white shadow-lg container px-4 relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="w-16 rounded-full" src={logo} alt="Logo" />
          <span className="text-lg font-bold">Share-Bite</span>
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-foods">All Foods</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          
          {/* Private routes */}
         {user && <li><NavLink to='/my-order'>Orders</NavLink></li>}
          {/* Private routes */}
          {/* Profile Icon */}

          <li className="relative">
            <button onClick={handleProfileClick} className="focus:outline-none">
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </button>

            {/* Dropdown */}
            {user && showUserMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
                <Link
                  to='/my-profile'
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </li>

          <li>
            <label className="swap swap-rotate">
              <input
                onChange={handleToggle}
                type="checkbox"
                checked={theme === "forest"}
              />
              {/* Light mode: sun icon */}
              <img className="swap-off w-6 h-6" src={sun} alt="Sun icon" />
              {/* Dark mode: moon icon */}
              <img className="swap-on w-6 h-6" src={moon} alt="Moon icon" />
            </label>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex-col z-10 bg-pink-800 absolute top-16 left-0 w-full shadow-lg">
          <li className="py-2 text-center border-b border-pink-700">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 text-center border-b border-pink-700">
            <Link to="/all-foods">All Foods</Link>
          </li>
          <li className="py-2 text-center border-b border-pink-700">
            <Link to="/gallery">Gallery</Link>
          </li>
          {!user && (
            <li className="py-2 text-center border-b border-pink-700">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
