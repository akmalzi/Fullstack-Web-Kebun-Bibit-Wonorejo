import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import defaultPic from "/assets/users/default-profile.png";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

function ProfileMenu(props) {
    const location = useLocation();
    const { setUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem("token");

        setIsLoading(true);
        try {
            if (token) {
                await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/logout`, {},{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            }

            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            toast.success("Logout berhasil");
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error("Terjadi kesalahan saat logout");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="h-full flex flex-col lg:flex-row xl:flex-col border-gray-300 ustify-center items-center border-[1px] rounded-xl p-12 max-md:py-8 max-md:px-2 shadow-md gap-y-4">
            <div className="w-full lg:w-1/4 xl:w-full mb-4 lg:mb-0 flex justify-center items-center flex-col">
                <img
                    src={props.user.photo ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${props.user.photo}` : defaultPic}
                    alt=""
                    className={`rounded-full size-36 shadow-md ${!props.user.photo ? 'p-2' : ''}`}
                />
                <p className="mt-2">
                    {props.fullName}
                </p>
            </div>
            <div className="flex flex-col w-3/4 ml-7 xl:ml-0 xl:w-full gap-y-6 justify-start">
                <Link
                    to="/profile"
                    className={`
                        group text-lg px-4 flex gap-x-4 items-center
                        ${location.pathname === "/profile" && 'border-s-4 border-primaryColor'}
                    `}
                >
                    <svg
                        className="size-6 transition-colors group-hover:fill-primaryColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <span className="transition-colors group-hover:text-primaryColor">
                        Profil
                    </span>
                </Link>
                <Link
                    to="/ubah-password"
                    className={`
                        group text-lg px-4 flex gap-x-4 items-center
                        ${location.pathname === "/ubah-password" && 'border-s-4 border-primaryColor'}
                    `}
                >
                    <svg
                        className="size-6 transition-colors group-hover:fill-primaryColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                    </svg>
                    <span className="transition-colors group-hover:text-primaryColor">
                        Ubah Password
                    </span>
                </Link>
                <button
                    type="button"
                    className="group text-lg px-4 flex gap-x-4 items-center"
                    onClick={handleLogout}
                >
                    <svg
                        className={`size-6 transition-colors group-hover:fill-deleteColor ${isLoading ? "fill-deleteHoverColor" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                    </svg>
                    <span className={`transition-colors group-hover:text-deleteColor ${isLoading ? "text-deleteHoverColor" : ""}`}>
                        {isLoading ? "Sedang logout..." : "Logout"}
                    </span>
                </button>
            </div>
        </div>
    )
};

ProfileMenu.propTypes = {
    fullName: PropTypes.string,
    user: PropTypes.object
}

export default ProfileMenu;