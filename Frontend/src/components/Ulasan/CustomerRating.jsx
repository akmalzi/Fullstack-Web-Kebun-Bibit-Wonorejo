import PropTypes from "prop-types";

function CustomerRatingStars({ rating }){
    return(
        <>
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                    <span
                        key={index}
                        className={`text-2xl ${
                        starValue <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    >
                        ★
                    </span>
                    );
                })}
            </div>
        </>
    )
}

CustomerRatingStars.propTypes = {
    rating : PropTypes.number
}

export default CustomerRatingStars