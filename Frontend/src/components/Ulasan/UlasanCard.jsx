import PropTypes from "prop-types"
import CustomerRating from "./CustomerRating"
import defaultPic from "/assets/users/default-profile.png"
import { formatTime } from "../../utils/formatTime.js"

function UlasanCard(props){
    return(
        <>
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md">
                <CustomerRating rating={props.rating}/>
                <div className="flex items-center my-2">
                    <img src={props.image ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${props.image}` : defaultPic} alt="" className={`w-[50px] h-[50px] rounded-full border border-gray-300 ${!props.image ? 'p-2' : ''} `}/>
                    <h3 className="ml-[12px] font-bold text-[22px]">{props.username}</h3>
                </div>
                <p className="text-base font-medium mt-[4px]">{props.review}</p>
                <h4 className="mt-2 text-gray-600">{formatTime(props.date)}</h4>
            </div>
        </>
    )
}

UlasanCard.propTypes = {
    rating : PropTypes.number,
    image : PropTypes.string,
    username : PropTypes.string,
    review : PropTypes.string,
    date : PropTypes.string,
}

export default UlasanCard