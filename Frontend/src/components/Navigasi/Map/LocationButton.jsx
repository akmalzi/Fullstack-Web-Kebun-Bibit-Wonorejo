import { useState } from 'react';
import imageUrl from "/assets/navigasi/location-icon.svg"
import PopUpDetail from './PopUpDetail';
import PropTypes from 'prop-types';

function LocationButton({ title, detail, popImage, icons}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div>
          <button className="" onClick={togglePopup}>
            <img
              src={imageUrl}
              className="w-3 md:w-6 lg:w-8 drop-shadow-lg hover:-translate-y-2 hover:scale-120 transition ease-in-out"
              alt=""
            />
          </button>
          {isOpen && (
            <PopUpDetail
              onClick={togglePopup}
              title={title}
              detail={detail}
              popImage={popImage}
              icons={icons}
            />
          )}
        </div>
      </>
    );
  }

LocationButton.propTypes = {
    title : PropTypes.string,
    detail : PropTypes.string,
    popImage : PropTypes.string,
    icons : PropTypes.arrayOf(PropTypes.string)
}
  
  export default LocationButton;