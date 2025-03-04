import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function ChangePasswordForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitChangePassword = async (data) => {
        setIsLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/user/${props.user.id}/change-password`, {
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            }, {
                headers: {
                    Authorization: `Bearer ${props.user.token}`
                }
            })
            toast.success("Password berhasil diubah");
            navigate("/profile");
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data.message || "Terjadi kesalahan saat mengubah password");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-between w-full">
            <form className="flex flex-col gap-y-4 mb-12 xl:mb-36" id="formChangePassword" onSubmit={handleSubmit(handleSubmitChangePassword)}>
                <label htmlFor="oldPassword" className="relative block">
                    <span className="font-semibold">Password Lama</span>
                    <input
                        id="oldPassword"
                        name="oldPassword"
                        type={props.isVisible1 ? "text" : "password"}
                        className="w-full border-gray-300 py-2 rounded-none border-b-2 pr-10"
                        {...register("oldPassword", {
                            required: "Password lama tidak boleh kosong",
                        })}
                    />
                    <span
                        onClick={props.handleVisible.bind(this, 1)}
                        className={`hover:cursor-pointer absolute inset-y-0 right-0 flex items-center pe-3 ${errors.oldPassword ? "translate-y-0.5 max-md-2:-translate-y-3" : "translate-y-3"}`}
                    >
                        {!props.isVisible1 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )}
                    </span>
                    {errors.oldPassword && <span className="text-red-500 text-sm">{errors.oldPassword.message}</span>}
                </label>
                <label htmlFor="newPassword" className="relative block">
                    <span className="font-semibold">Password Baru</span>
                    <input
                        id="newPassword"
                        name="newPassword"
                        type={props.isVisible2 ? "text" : "password"}
                        className="w-full border-gray-300 py-2 rounded-none border-b-2 pr-10"
                        {...register("newPassword", {
                            required: "Password baru tidak boleh kosong",
                            minLength: {
                                value: 8,
                                message: "Password minimal 8 karakter"
                            }
                        })}
                    />
                    <span
                        onClick={props.handleVisible.bind(this, 2)}
                        className={`hover:cursor-pointer absolute inset-y-0 right-0 flex items-center pe-3 ${errors.newPassword ? "translate-y-0.5 max-md-2:-translate-y-3" : "translate-y-3"}`}
                    >
                        {!props.isVisible2 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )}
                    </span>
                    {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword.message}</span>}
                </label>
                <label htmlFor="confirmNewPassword" className="relative block">
                    <span className="font-semibold">Konfirmasi Password Baru</span>
                    <input
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        type={props.isVisible3 ? "text" : "password"}
                        className="w-full border-gray-300 py-2 rounded-none border-b-2 pr-10"
                        {...register("confirmNewPassword", {
                            required: "Konfirmasi password baru tidak boleh kosong",
                            validate: value => value === document.getElementById("newPassword").value || "Password tidak sama dengan password baru"
                        })}
                    />
                    <span
                        onClick={props.handleVisible.bind(this, 3)}
                        className={`hover:cursor-pointer absolute inset-y-0 right-0 flex items-center pe-3 ${errors.confirmNewPassword ? "translate-y-0.5 max-md-2:-translate-y-3" : "translate-y-3"}`}
                    >
                        {!props.isVisible3 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )}
                    </span>
                    {errors.confirmNewPassword && <span className="text-red-500 text-sm">{errors.confirmNewPassword.message}</span>}
                </label>
            </form>
            <button
                className={`w-fit transition-colors hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2 ${isLoading ? "bg-hoverPrimaryColor" : "bg-primaryColor"}`}
                type="submit"
                form="formChangePassword"
            >
                {isLoading ? "Mengirim Perubahan..." : "Simpan Perubahan"}
            </button>
        </div>
    )
}

ChangePasswordForm.propTypes = {
    isVisible1: PropTypes.bool,
    isVisible2: PropTypes.bool,
    isVisible3: PropTypes.bool,
    handleVisible: PropTypes.func,
    user: PropTypes.object,
}

export default ChangePasswordForm;