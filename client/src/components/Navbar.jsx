import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

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
  useEffect(() => {
    // Example user state simulation. Replace with actual user fetch from auth context or service
    const fetchedUser = {
      isAuthenticated: true,
      photoURL: "https://example.com/user-photo.jpg",
    };
    setUser(fetchedUser);
  }, []);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-300 to-purple-500 text-white shadow-lg sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold hover:text-gray-200 transition duration-200"
        >
          College Portal
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
        </div>

        {/* User Auth Section */}
        <div className="flex items-center space-x-4">
          {user?.email ? (
            <>
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <p>
                <Link to="profile">{user.name}</Link>
              </p>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-ghost text-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-sm btn-ghost text-gray-200">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="btn btn-sm btn-primary text-gray-200"
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
          {user?.isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-full text-left text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block text-lg hover:bg-indigo-600 rounded-md px-3 py-2"
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
