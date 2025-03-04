import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import axios from "axios"


function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = async (data) => {
        setIsLoading(true)
        try {
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/register`, {
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                username: data.username,
                password: data.password
            });
            toast.success("Pendaftaran berhasil");
            navigate("/login");
        } catch (error) {
            console.error(error);
            toast.error("Terjadi kesalahan saat mendaftar");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="min-w-full">
                <form id="formRegister" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="fname"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                                placeholder=" "
                                required
                                {...register("fname", {
                                    required: "Nama Depan tidak boleh kosong"
                                })}
                            />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Depan</label>
                            {errors.fname && <span className="text-deleteColor text-sm">{errors.fname.message}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="lname"
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                                placeholder=" "
                                {...register("lname", {
                                    required: false
                                })}
                            />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Belakang <span className="text-gray-300">(opsional)</span></label>
                            {errors.lname && <span className="text-deleteColor text-sm">{errors.lname.message}</span>}
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            placeholder=" "
                            required
                            {...register("email", {
                                required: "Email tidak boleh kosong",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email tidak valid"
                                }
                            })}
                        />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        {errors.email && <span className="text-deleteColor text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="username"
                            id="floating_username"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            placeholder=" "
                            required
                            {...register("username", {
                                required: "Username tidak boleh kosong",
                                minLength: {
                                    value: 6,
                                    message: "Username minimal 6 karakter"
                                }
                            })}
                        />
                        <label htmlFor="floating_username" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            placeholder=" "
                            required
                            {...register("password", {
                                required: "Password tidak boleh kosong",
                                minLength: {
                                    value: 8,
                                    message: "Password minimal 8 karakter"
                                }
                            })}
                        />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        {errors.password && <span className="text-deleteColor text-sm">{errors.password.message}</span>}
                    </div>
                    <div className="relative z-0 w-full mb-12 group">
                        <input
                            type="password"
                            name="confirmPassword"
                            id="floating_confirm_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            placeholder=" "
                            required
                            {...register("confirmPassword", {
                                required: "Konfirmasi Password tidak boleh kosong",
                                validate: value => value === document.getElementById("floating_password").value || "Password tidak sama"
                            })}
                        />
                        <label htmlFor="floating_confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Konfirmasi Password</label>
                        {errors.confirmPassword && <span className="text-deleteColor text-sm">{errors.confirmPassword.message}</span>}
                    </div>
                </form>
                {/* <div>
                    <div className="flex items-start justify-start mb-5">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-400" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-regular text-black">Verifikasi diperlukan untuk melanjutkan pendaftaran Anda.</label>
                        </div>
                    </div>
                </div> */}
                <button form="formRegister" type="submit" className={`text-white hover:bg-hoverPrimaryColor transition fade-in focus:ring-4 focus:ring-primary-400 focus:outline-none font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center mb-6 ${isLoading ? "bg-hoverPrimaryColor" : "bg-primaryColor"}`} disabled={isLoading}>Daftar</button>
                <div className="flex justify-center">
                    Sudah punya akun? <Link to="/login" className="ml-2 text-blue-700">Masuk.</Link>
                </div>
            </div>
        </>
    )
}

export default RegisterForm