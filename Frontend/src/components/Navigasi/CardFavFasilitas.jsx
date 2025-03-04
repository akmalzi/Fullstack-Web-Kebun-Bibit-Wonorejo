import { useState } from "react";
import PopUpDetail from "./Map/PopUpDetail";
import PropTypes from "prop-types";

function CardFavFasilitas({ tag, title, detail, popImage, icons }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="w-fit h-fit my-4 mx-4 rounded-3xl xl:mx-0 xl:my-0 relative shadow-lg">
        <img src={tag} alt="" className="rounded-2xl" width={330} />
        <div className="w-full h-fit py-2 px-2 rounded-b-2xl bg-primary-600 bg-opacity-70 absolute bottom-0 flex justify-end">
          <button className="text-white font-semibold" onClick={togglePopup}>
            detail
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
      </div>
    </>
  )
}

CardFavFasilitas.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  popImage: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string)
}

export default CardFavFasilitas