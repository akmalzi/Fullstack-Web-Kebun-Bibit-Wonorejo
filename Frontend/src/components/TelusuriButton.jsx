import { useState } from 'react';
import { Link } from "react-router-dom"

function TelusuriButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md-2:items-center items-start relative">
      <button
        onClick={togglePopup}
        className="md-2:mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600 mb-2"
      >
        Telusuri
      </button>

      {isOpen && (
        <div className="bg-primary-600 rounded-lg shadow-lg text-center text-white w-fit mt-2 absolute top-5 left-4 z-20">
          <Link
            onClick={() => setIsOpen(false)}
            to="/navigasi"
            className="block text-lg font-semibold py-2 w-full hover:bg-primary-700 rounded-t-lg px-4"
          >
            Navigasi
          </Link>
          <hr className="border-white opacity-50" />
          <Link
            onClick={() => setIsOpen(false)}
            to="/fasilitas"
            className="block text-lg font-semibold py-2 w-full hover:bg-primary-700 rounded-b-lg px-4"
          >
            Fasilitas
          </Link>
        </div>
      )}
    </div>
  );
}

export default TelusuriButton;
