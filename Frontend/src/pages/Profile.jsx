import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileMenu from "../components/ProfileMenu";
import defaultPic from "/assets/users/default-profile.png";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import PopUpDeletePhotoProfile from "../components/Profile/PopUpDeleteProfile";

function Profile() {
    const { user, setUser } = useAuth();
    const [previewImage, setPreviewImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fname: user.fname,
            lname: user.lname,
            username: user.username,
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPopUp, setIsShowPopUp] = useState(false);

    const handlePhotoChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleSubmitEditProfile = async (data) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            // formData.append("_method", "put");
            formData.append("fname", data.fname);
            formData.append("lname", data.lname);
            formData.append("username", data.username);
            if (selectedImage) {
                formData.append("photo", selectedImage);
            }

            await axios.put(`${import.meta.env.VITE_APP_API_URL}/user/${user.id}/edit`, formData, 
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const updatedUserResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/user/${user.id}`)
            setUser({
                ...user,
                ...updatedUserResponse.data.data.user,
                token: user.token
            });
            localStorage.setItem("user", JSON.stringify(updatedUserResponse.data.data.user));
            if(previewImage) {
                setPreviewImage(null);
            }
            toast.success("Profil berhasil diubah");
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data.message || "Terjadi kesalahan saat mengubah profil");
        } finally {
            setIsLoading(false);
        }
    }

    const handlePopUp = () => {
        setIsShowPopUp(!isShowPopUp);
    }

    const handleDeletePhoto = async () => {
        setIsLoading(true);
        try {
            await axios.delete(`${import.meta.env.VITE_APP_API_URL}/user/${user.id}/delete-photo`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            const updatedUserResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/user/${user.id}`);
            setUser({
                ...user,
                ...updatedUserResponse.data.data.user,
                token: user.token
            });
            localStorage.setItem("user", JSON.stringify(updatedUserResponse.data.data.user));
            toast.success("Foto profil berhasil dihapus");
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data.message || "Terjadi kesalahan saat menghapus foto profil");
        } finally {
            setIsLoading(false);
            setIsShowPopUp(false);
        }
    }

    return (
        <>
            <Navbar />
            <section className="p-12 max-md:p-6 md:py-20 xl:px-20 md:px-40 animate-fade-in min-h-screen">
                <div className="flex xl:flex-row flex-col gap-x-8">
                    <div className="w-full order-2 xl:order-1 xl:w-3/4 border-[1px] border-gray-300 rounded-xl p-8 shadow-md max-md:py-8 max-md:px-4">
                        <h2 className="mb-8 text-2xl font-semibold text-primaryColor">
                            Profil Pengguna
                        </h2>
                        <form id="formProfile" onSubmit={handleSubmit(handleSubmitEditProfile)}>
                            <div className="flex lg:flex-row flex-col">
                                <div className="flex flex-row lg:flex-col items-center justify-center lg:mx-8 xl:mx-20">
                                    <img
                                        src={previewImage || (user.photo ? `${import.meta.env.VITE_APP_API_IMAGE_URL}/user/${user.photo}` : defaultPic)}
                                        alt="profile photo"
                                        className={`rounded-full size-36 lg:mb-12 shadow-md ${!user.photo ? !previewImage ? 'p-2' : '' : ''}`}
                                    />
                                    <div className="flex flex-col gap-y-6 ml-8 lg:ml-0">
                                        <label className="text-center py-2 px-8 font-semibold rounded-lg transition-colors bg-primaryColor hover:bg-hoverPrimaryColor hover:cursor-pointer text-white shadow-md">
                                            Ganti Profil
                                            <input
                                                type="file"
                                                accept="image/jpeg, image/png, image/jpg"
                                                className="hidden"
                                                onChange={handlePhotoChange}
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            className={`py-2 px-8 font-semibold rounded-lg transition-colors bg-deleteColor hover:bg-deleteHoverColor text-white shadow-md ${user.photo ? '' : 'hidden'}`}
                                            disabled={!user.photo}
                                            onClick={handlePopUp}
                                        >
                                            Hapus Profil
                                        </button>
                                        {
                                            isShowPopUp && <PopUpDeletePhotoProfile onClick={handlePopUp} isLoading={isLoading} handleDeletePhoto={handleDeletePhoto}/>
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-center border-[1px] lg:my-0 my-8">
                                </div>
                                <div className="grow flex flex-col justify-between mx-0 lg:mx-10 xl:mx-16">
                                    <div className="flex flex-col gap-y-4 mb-12 lg:mb-16">

                                        <label htmlFor="fname">
                                            <span className="font-semibold">Nama Depan</span>
                                            <input
                                                id="fname"
                                                name="fname"
                                                type="text"
                                                className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                                {...register("fname", {
                                                    required: "Nama Depan tidak boleh kosong"
                                                })}
                                            />
                                            {errors.fname && <span className="text-red-500">{errors.fname.message}</span>}
                                        </label>
                                        <label htmlFor="lname">
                                            <span className="font-semibold">Nama Belakang</span>
                                            <input
                                                id="lname"
                                                name="lname"
                                                type="text"
                                                className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                                {...register("lname")}
                                            />
                                        </label>
                                        <label htmlFor="username">
                                            <span className="font-semibold">Username</span>
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                                {...register("username", {
                                                    required: "Username tidak boleh kosong"
                                                })}
                                            />
                                            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                                        </label>
                                        <label htmlFor="email">
                                            <span className="font-semibold">Email</span>
                                            <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                className="w-full border-gray-300 py-2 rounded-none border-b-2 text-gray-500"
                                                value={user.email}
                                                disabled
                                                readOnly
                                            />
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        form="formProfile"
                                        className={`w-fit transition-colors hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2 ${isLoading ? "bg-hoverPrimaryColor" : "bg-primaryColor"}`}
                                    >
                                        {isLoading ? "Menyimpan Perubahan..." : "Simpan Perubahan"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full order-1 mb-8 xl:order-2 xl:mb-0 xl:w-1/4">
                        <ProfileMenu user={user} fullName={`${user.fname + " " + user.lname}`} />
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default Profile;