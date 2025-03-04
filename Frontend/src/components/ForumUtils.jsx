import TagsList from "./TagsList"
import PopUpDiskusi from "./PopUpDiskusi";
import PropTypes from "prop-types";

function ForumUtils(props) {

    const togglePopup = () => {
        props.setIsOpen(!props.isOpen);
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="search" className="relative flex items-center text-gray-300 focus-within:text-gray-600 w-full">
                <svg
                    className="absolute pointer-events-none size-8 top-1.5 left-2 xl:left-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                >
                    <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
                </svg>
                <input
                    className="pl-12 xl:pl-10 border-[1px] border-gray-300 rounded-md p-2 mb-8 w-full"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Cari Diskusi"
                    onChange={props.onSearchChange}
                />
            </label>

            <div className="flex flex-col gap-y-8 border-[1px] border-gray-300 p-8 rounded-md shadow-md">
                <button
                    className={`transition-colors hover:bg-hoverPrimaryColor py-2 px-12 rounded-md shadow-md ${props.user ? "text-white bg-primaryColor" : "bg-hoverPrimaryColor text-gray-300"}`}
                    onClick={togglePopup}
                    disabled={!props.user}
                >
                    <h1 className="font-bold text-white text-xl">
                        {props.user ? "Mulai Diskusi" : "Login untuk memulai diskusi"}
                    </h1>
                </button>
                {props.isOpen && (
                    <PopUpDiskusi
                        onSubmit={props.onSubmit}
                        onClick={togglePopup}
                        tags={props.tags}
                        isLoading={props.isLoading}
                    />
                )}
                <hr className="border-[1px] border-gray-300" />
                <p className="text-lg text-primaryColor">
                    Urut Berdasarkan
                </p>
                <form>
                    <input
                        type="radio"
                        name="diskusiOrder"
                        id="ascOrder"
                        value={"asc"}
                        defaultChecked
                        onChange={props.onOrderChange}
                    />
                    <label className="ms-2" htmlFor="ascOrder">Diskusi Terbaru</label><br />
                    <input
                        type="radio"
                        name="diskusiOrder"
                        id="descOrder"
                        value={"desc"}
                        onChange={props.onOrderChange}
                    />
                    <label className="ms-2" htmlFor="descOrder">Diskusi Terlama</label>
                </form>
                <p className="text-lg text-primaryColor">
                    Tags
                </p>
                <TagsList
                    tags={props.tags}
                    searchTag={props.searchTag}
                />
            </div>
        </div>
    )
};

ForumUtils.propTypes = {
    onSearchChange: PropTypes.func,
    onOrderChange: PropTypes.func,
    onSubmit: PropTypes.func,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string
    })),
    user: PropTypes.object,
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    isLoading: PropTypes.bool,
    searchTag: PropTypes.string
}

export default ForumUtils;
