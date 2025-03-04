import UlasanCard from "../../components/Ulasan/UlasanCard";
import PropTypes from "prop-types";

function UlasanList(props) {

    return (
        <>
            {
                !props.isLoading && (
                    props.reviews.length > 0 ? (
                        <div className="py-4 px-6 border-l-[2px] w-full overflow-y-auto space-y-6 p-4">
                            {/* TODO: implement loading */}
                            {props.reviews.map((item) => (
                                <UlasanCard rating={item.score} image={item.photo} username={item.fullname} review={item.content} date={item.created_at} key={item.id} />
                            ))}
                        </div>
                    ) : (
                        <h4 className="my-16 text-center text-lg text-gray-300 col-span-8 xl:col-span-6">
                            Tidak ada ulasan
                        </h4>
                    )
                )
            }
        </>
    )
}

UlasanList.propTypes = {
    isLoading: PropTypes.bool,
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        score: PropTypes.number,
        photo: PropTypes.string,
        fullname: PropTypes.string,
        content: PropTypes.string,
        created_at: PropTypes.string
    }))
}

export default UlasanList