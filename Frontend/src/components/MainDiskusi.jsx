import PropTypes from "prop-types";
import { formatTimeDifference } from "../utils/formatTime";
import defaultPic from "/assets/users/default-profile.png";

function MainDiskusi(props) {
    return (
        <div className="rounded-md shadow-md p-8 border-[1px] border-gray-300 transition-colors hover:bg-gray-100">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-x-2">
                    <img src={props.photo ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${props.photo}` : defaultPic} className={`size-8 rounded-full border border-gray-300 ${!props.photo ? 'p-2' : ''}`} alt="Photo" />
                    <p>{props.nama}</p>
                </div>
                <p>{formatTimeDifference(props.created_at)}</p>
            </div>
            <div className="mb-2">
                <h3 className="text-lg font-bold">{props.judul}</h3>
                <p className="text-sm line-clamp-3">{props.deskripsi}</p>
            </div>
            <div>
                
            </div>
            <div className="flex items-center gap-x-2">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="600.619" height="600.619" viewBox="0 0 600.619 600.619"><path d="M541.979 5.706H58.64C26.581 5.706.5 31.788.5 63.846V424.84c0 31.556 25.271 57.32 56.636 58.121l.139 53.936c.021 8.118 1.679 15.971 4.928 23.34a57.6 57.6 0 0 0 13.048 18.562c10.903 10.391 25.18 16.114 40.198 16.114 10.843 0 21.471-3.056 30.737-8.835L311.471 482.98h230.508c32.059 0 58.141-26.081 58.141-58.14V63.846c-.003-32.058-26.083-58.14-58.141-58.14m15.298 419.134c0 8.449-6.85 15.3-15.299 15.3H303.586a15.3 15.3 0 0 0-8.097 2.318L123.512 549.729c-2.582 1.61-5.357 2.343-8.063 2.343-7.958 0-15.311-6.335-15.334-15.285l-.208-81.386c-.021-8.435-6.866-15.261-15.3-15.261H58.64c-8.45 0-15.3-6.851-15.3-15.301V63.846c0-8.45 6.851-15.3 15.3-15.3h483.338c8.449 0 15.301 6.85 15.301 15.3V424.84z" /><path d="M115.449 595.413c-15.147 0-29.545-5.771-40.542-16.252a58.2 58.2 0 0 1-13.161-18.723c-3.277-7.434-4.95-15.354-4.97-23.541l-.137-53.451c-15.138-.51-29.304-6.771-39.939-17.663C5.93 454.755 0 440.214 0 424.84V63.846c0-32.334 26.306-58.64 58.64-58.64h483.338c32.333 0 58.639 26.306 58.641 58.64v360.995c0 32.334-26.306 58.64-58.641 58.64H311.614L146.45 586.502c-9.346 5.83-20.066 8.911-31.001 8.911M58.64 6.206C26.857 6.206 1 32.063 1 63.846V424.84c0 15.111 5.829 29.404 16.414 40.244 10.566 10.821 24.677 16.993 39.735 17.377l.486.013.14 54.422c.021 8.048 1.664 15.833 4.885 23.139a57.1 57.1 0 0 0 12.936 18.402c10.811 10.303 24.964 15.977 39.853 15.977 10.748 0 21.285-3.029 30.472-8.759L311.327 482.48h230.651c31.783 0 57.641-25.857 57.641-57.64V63.846c-.002-31.783-25.859-57.64-57.641-57.64zm56.809 546.366c-8.708 0-15.812-7.081-15.834-15.784l-.208-81.386c-.021-8.14-6.66-14.762-14.8-14.762H58.64c-8.712 0-15.8-7.088-15.8-15.801V63.846c0-8.712 7.088-15.8 15.8-15.8h483.338c8.713 0 15.801 7.088 15.801 15.8V424.84c-.002 8.712-7.09 15.8-15.801 15.8H303.586c-2.772 0-5.481.775-7.833 2.242L123.777 550.153c-2.537 1.583-5.417 2.419-8.328 2.419M58.64 49.046c-8.161 0-14.8 6.639-14.8 14.8V424.84c0 8.161 6.64 14.801 14.8 14.801h25.966c8.69 0 15.778 7.069 15.8 15.76l.208 81.386c.021 8.153 6.676 14.786 14.834 14.786 2.724 0 5.42-.784 7.798-2.267l171.977-107.271a15.8 15.8 0 0 1 8.362-2.395h238.393c8.16 0 14.799-6.639 14.799-14.8l.002-360.994c0-8.161-6.64-14.8-14.801-14.8z" /></svg>
                <p>{props.reply_count}</p>
            </div>
        </div>
    )
};

MainDiskusi.propTypes = {
    photo : PropTypes.string,
    nama : PropTypes.string,
    created_at : PropTypes.string,
    judul : PropTypes.string,
    deskripsi : PropTypes.string,
    reply_count : PropTypes.number,
}

export default MainDiskusi;