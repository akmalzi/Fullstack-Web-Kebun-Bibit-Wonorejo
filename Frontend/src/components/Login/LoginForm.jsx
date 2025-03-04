import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuth } from "../../context/AuthContext"

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
                email: data.email,
                password: data.password
            })
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
            setUser({
                ...response.data.data.user,
                token: response.data.data.token
            });
            toast.success("Login berhasil")
            navigate("/")
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data.message || "Terjadi kesalahan pada server")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className="min-w-full">
                <form id="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            placeholder=" "
                            required
                            {...register("email", {
                                required: "Email tidak boleh kosong",
                            })}
                        />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-focus:dark:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="relative z-0 w-full mb-12 group">
                        <input
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            placeholder=" "
                            required
                            {...register("password", {
                                required: "Password tidak boleh kosong",
                            })}
                        />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                </form>
                {/* <div>
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:0-primary-500" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-regular text-black dark:text-gray-300">Ingatkan Saya</label>
                        </div>
                        <div>
                            <Link to="/forgot-password" className="text-blue-700">Lupa Password?</Link>
                        </div>
                    </div>
                </div> */}
                <button form="loginForm" type="submit" className={`text-white hover:bg-hoverPrimaryColor transition fade-in focus:ring-4 focus:ring-primary-400 focus:outline-none font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center mb-6 ${isLoading ? "bg-hoverPrimaryColor" : "bg-primaryColor"}`} disabled={isLoading}>Masuk</button>
                {/* <button type="submit" className="text-black bg-white focus:ring-4 focus:ring-primary-400 focus:outline-none font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center border-2 border-black flex items-center justify-center mb-6">
                    <img src="/assets/google.png" width={16} alt="" />
                    <span className="ml-3">
                        Login dengan google
                    </span>
                </button> */}
                <div className="flex justify-center">
                    Belum punya akun? <Link to="/register" className="ml-2 text-blue-700">Daftar Sekarang.</Link>
                </div>
            </section>
        </>
    )
}

export default LoginForm