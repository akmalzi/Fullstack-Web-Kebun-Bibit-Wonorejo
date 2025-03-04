import PropTypes from 'prop-types';
import { formatTimeDifference } from '../utils/formatTime';
import defaultPic from '/assets/users/default-profile.png';

function DiskusiReply(props) {
    return (
        <div className="w-full">
            <div className="rounded-md shadow-md p-8 border-[1px] border-gray-300">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-x-2">
                        <img src={props.photo ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${props.photo}` : defaultPic} className={`size-8 rounded-full border border-gray-300 ${!props.photo ? 'p-2' : ''}`} alt="Photo" />
                        <p className="text-md max-md:text-sm">{props.name}</p>
                    </div>
                    <p className="text-md max-md:text-sm">{formatTimeDifference(props.created_at)}</p>
                </div>
                <div className="ms-10">
                    <div className="mb-8">
                        <p className="text-sm">{props.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

DiskusiReply.propTypes = {
    name : PropTypes.string,
    photo : PropTypes.string,
    created_at : PropTypes.string,
    comment : PropTypes.string
}

export default DiskusiReply;