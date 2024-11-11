import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({}); // Replace this with useAuth() or context if available
  const { user: loggedUser, logout } = useAuth();

  useEffect(() => {
    setUser({
      email: loggedUser?.email,
      photoURL: loggedUser?.photoURL,
      name: loggedUser?.displayName,
    });
  }, [loggedUser?.displayName, loggedUser?.email, loggedUser?.photoURL]);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-300 to-purple-500 text-white shadow-lg sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          
        >
         <img src="./logo.png" alt="Logo"  className="w-20 "/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="hover:underline hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/colleges"
            className="hover:underline hover:text-gray-200 transition duration-200"
          >
            Colleges
          </Link>
          <Link
            to="/admission"
            className="hover:underline hover:text-gray-200 transition duration-200"
          >
            Admission
          </Link>
          <Link
            to="/my-college"
            className="hover:underline hover:text-gray-200 transition duration-200"
          >
            My College
          </Link>
          <Link
            to="/taskDescription"
            className="hover:underline text-blue-700 text-pretty font-bold hover:text-gray-200 transition duration-200 animate-blink"
          >
            Features ?
          </Link>
        </div>

        {/* User Auth Section */}
        <div className="flex items-center space-x-4">
          {user?.email ? (
            <>
              {user.photoURL ? (
                <Link to="/profile">
                  {" "}
                  <img
                    src={user?.photoURL}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              ) : (
                <Link to="profile">
                  <FaUser size={30} />
                </Link>
              )}

              <p>
                <Link to="profile">{user.name}</Link>
              </p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white rounded-full cursor-pointer leading-6 font-medium text-center shadow-xs transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="bg-indigo-50 text-indigo-500 rounded-full cursor-pointer leading-6 font-medium text-center transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-100"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-500 text-white rounded-full cursor-pointer leading-6 font-medium text-center shadow-xs transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-indigo-700 text-white p-4 space-y-2">
          <Link
            to="/"
            className="block text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/colleges"
            className="block text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Colleges
          </Link>
          <Link
            to="/admission"
            className="block text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Admission
          </Link>
          <Link
            to="/my-college"
            className="block text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            My College
          </Link>
          {user?.email ? (
            <>
              {user.photoURL ? (
                <Link to="/profile">
                  {" "}
                  <img
                    src={user?.photoURL}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              ) : (
                <Link to="profile">
                  <FaUser size={30} />
                </Link>
              )}

              <p>
                <Link to="profile">{user.name}</Link>
              </p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white rounded-full cursor-pointer leading-6 font-medium text-center shadow-xs transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="bg-indigo-50 text-indigo-500 rounded-full cursor-pointer leading-6 font-medium text-center transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-100"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-500 text-white rounded-full cursor-pointer leading-6 font-medium text-center shadow-xs transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
