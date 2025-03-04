import StarRating from "./StarRating"
import CustomerRatingStars from "./CustomerRating"
import PropTypes from "prop-types"
import { Controller, useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"

function UlasanForm({ user, avgRating, totalReviews, handleReviewSubmit }) {
    const [isLoading, setIsLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            rating: 0,
            message: ""
        }
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/rating/create`, {
                score: data.rating,
                content: data.message
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            reset();
            handleReviewSubmit();
            toast.success("Ulasan berhasil dikirim")
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data.message || "Terjadi kesalahan saat mengirim ulasan")
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <section className="py-4 px-6 w-full">
                <div className="px-2 border-b-[1px] border-black max-w-fit">
                    <h1 className="text-2xl font-medium">Ulasan</h1>
                </div>
                <div className="flex items-center mt-2">
                    <h3 className="text-xl font-medium mr-2">{avgRating}</h3>
                    <CustomerRatingStars rating={Math.floor(avgRating)} />
                    <h3 className="text-xl font-medium ml-2">{totalReviews} Ulasan</h3>
                </div>
                <form id="ulasanForm" className="w-full flex flex-col items-end" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="message" className="block mb-2 text-gray-900 text-xl font-medium self-start mt-6">Tambah Ulasan</label>
                    <Controller
                        name="message"
                        control={control}
                        rules={{
                            required: "Ulasan tidak boleh kosong",
                        }}
                        render={({ field}) => (
                            <textarea {...field} id="message" rows="14" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600" placeholder="Tulis ulasan di sini..." disabled={!user}></textarea>
                        )}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                    <StarRating control={control} name={"rating"}/>
                    <button form="ulasanForm" type="submit" className="border-[2px] border-black p-[8px] text-[16px] font-semibold rounded-lg" disabled={!user} >
                        {user ? isLoading ? "Mengirim Ulasan..." : "Kirim" : "Login untuk memberi ulasan"}
                    </button>
                </form>
            </section>
        </>
    )
}

UlasanForm.propTypes = {
    user: PropTypes.object,
    avgRating: PropTypes.number,
    totalReviews: PropTypes.number,
    handleReviewSubmit: PropTypes.func
}

export default UlasanForm