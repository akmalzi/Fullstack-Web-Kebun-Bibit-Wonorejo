import { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "/assets/logo-app.png";
import defaultPic from "/assets/users/default-profile.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-full h-fit py-4 px-2 lg:px-[18px] justify-between items-center sticky top-0 z-10 bg-white">
        <img src={imgLogo} alt="" width="136px" />
        <div>
          <ul className="hidden md-2:flex">
            <li>
              <Link
                className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600"
                to={"/"}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600"
                to={"/telusuri"}
              >
                Telusuri
              </Link>
            </li>
            <li>
              <Link
                className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600"
                to={"/katalog"}
              >
                Katalog
              </Link>
            </li>

            <li>
              <Link
                className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600"
                to={"/edukasi"}
              >
                Edukasi
              </Link>
            </li>

            <li>
              <Link
                className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600"
                to={"/forum"}
              >
                Forum
              </Link>
            </li>
          </ul>
        </div>
        <div className="w text-end">
          {
            user ? (
              <Link
                to="/profile"
                className="hidden md-2:flex md-2:items-center gap-x-4"
              >
                <img
                  src={user.photo ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${user.photo}` : defaultPic}
                  alt="Photo Profile"
                  className={`rounded-full size-12 border border-gray-300 ${user.photo ? '' : 'p-2'}`}
                />
                <p className="text-lg">{user.username}</p>
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden md-2:inline-block py-2 px-5 border-[2px] border-black rounded-full"
              >
                Login
              </Link>
            )
          }
          <button
            className="md-2:hidden text-white focus:outline-none border-[2px] border-black p-[4px] rounded-md"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`md-2:hidden shadow-xl fixed z-50 inset-y-0 left-0 w-64 bg-white text-black transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4 flex justify-between items-center">
            <img src={imgLogo} alt="" width="136px" />
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <Link
              className="text-lg transition duration-200 ease-in text-black hover:text-primary-600"
              to={"/"}
            >
              Beranda
            </Link>
            <Link
              className="text-lg transition duration-200 ease-in text-black hover:text-primary-600"
              to={"/katalog"}
            >
              Katalog
            </Link>
            <Link
              className="text-lg transition duration-200 ease-in text-black hover:text-primary-600"
              to={"/edukasi"}
            >
              Edukasi
            </Link>
            <Link
              className="text-lg transition duration-200 ease-in text-black hover:text-primary-600"
              to={"/forum"}
            >
              Forum
            </Link>
            <Link
              className="text-lg transition duration-200 ease-in text-black hover:text-primary-600"
              to={"/telusuri"}
            >
              Telusuri
            </Link>
            {
              user ? (
                <Link
                  to="/profile"
                  className="my-auto text-center inline-block py-2 px-5 border-[2px] border-black rounded-full"
                >
                  Profile Anda
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="my-auto text-center inline-block py-2 px-5 border-[2px] border-black rounded-full"
                >
                  Login
                </Link>
              )
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;