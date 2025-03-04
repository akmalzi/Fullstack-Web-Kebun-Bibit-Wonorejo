import defaultPic from "/assets/users/default-profile.png"
import PropTypes from "prop-types"

function ReviewCard(props){
    return (
        <>
            <div className="w-full mt-4 md:mt-0 flex flex-col justify-center items-center text-center p-6 border-[1px] border-gray-300 md:mx-2 h-80">
                <p className="text-lg line-clamp-4">
                    {props.review}
                </p>
                <img src={props.userImg ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${props.userImg}` : defaultPic} className={`w-12 h-12 my-4 border border-gray-300 rounded-full ${!props.userImg ? 'p-2' : ''}`} alt="user-profile" />
                <h5 className="text-2xl font-bold">{props.name}</h5>
            </div>
        </>
    )
}

ReviewCard.propTypes = {
    review : PropTypes.string,
    userImg : PropTypes.string,
    name : PropTypes.string,
}

export default ReviewCard