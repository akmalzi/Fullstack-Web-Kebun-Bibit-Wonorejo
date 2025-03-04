import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function AutoImageChanger({icons}){

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="relative w-[100px] h-[100px]">
        <img
          src={icons[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          key={currentIndex}
        />
      </div>
    </div>
  );
};

AutoImageChanger.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
}

export default AutoImageChanger;
