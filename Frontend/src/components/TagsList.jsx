import { Link, useNavigate } from "react-router-dom";
// import Tags from "../data/dummy/tags.json";
import PropTypes from "prop-types";

function TagsList(props) {
    const navigate = useNavigate();
    const handleClickedTag = (tag) => {
        if (props.searchTag?.replace("+", " ") === tag.name.toLowerCase()) {
            navigate("/forum");
        }
    }
    return (
        <div className="flex flex-wrap gap-2">
            {props.tags && props.tags.map((value, index) => {
                const isSelected = props.searchTag?.replace("+", " ") === value.name.toLowerCase();
                return (
                    <Link
                        to={{
                            pathname: "/forum",
                            search: isSelected ? '' : `?tag=${encodeURIComponent(value.name.toLowerCase().replace(" ", "+"))}`
                        }}
                        key={index}
                        className={`text-sm border-[1px] border-gray-300 rounded-md p-2 transition-colors hover:bg-primaryColor hover:text-white ${props.searchTag?.replace("+", " ") === value.name.toLowerCase() ? "bg-primaryColor text-white" : ""}`}
                        onClick={() => handleClickedTag(value)}
                    >
                        {value.name}
                    </Link>

                )
            })}
        </div>
    )
};

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string,
    })),
    searchTag: PropTypes.string
}

export default TagsList;