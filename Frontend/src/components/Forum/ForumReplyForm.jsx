import PropTypes from "prop-types";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ForumReplyForm(props) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleReplySubmit = async (data) => {
        props.setIsLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/forum/replies/create`, {
                forum_id: props.forumId,
                reply: data.reply,
            }, {
                headers: {
                    Authorization: `Bearer ${props.user.token}`
                }
            })
            reset();
            toast.success("Komentar berhasil ditambahkan");
            props.onReplyAdded();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data.message || "Terjadi kesalahan saat menambahkan komentar");
        } finally {
            props.setIsLoading(false);
        }
    }

    return (
        <>
            <div className="mt-4 mb-2 p-4 rounded-md shadow-md border-[1px] border-gray-300">
                <form id="replyDiskusi" onSubmit={handleSubmit(handleReplySubmit)}>
                    <textarea
                        rows={5}
                        className="w-full"
                        name="reply"
                        id="replyDiskusi"
                        placeholder="Tulis Komentar Anda..."
                        style={{ resize: "none" }}
                        {...register("reply", {
                            required: "Komentar tidak boleh kosong",
                        })}
                    >
                    </textarea>
                </form>
            {errors.reply && <span className="text-red-500 text-sm">{errors.reply.message}</span>}
            </div>
            <div className="w-full flex justify-end">
                <button
                    form="replyDiskusi"
                    className={`transition-colors hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2 mt-2 ${props.isLoading ? "bg-hoverPrimaryColor" : "bg-primaryColor"}`}
                    type="submit"
                >
                    {props.isLoading ? "Mengirim Pesan..." : "Kirim Pesan"}
                </button>
            </div>
        </>
    );
}

ForumReplyForm.propTypes = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    forumId: PropTypes.number,
    user: PropTypes.object,
    onReplyAdded: PropTypes.func,
}

export default ForumReplyForm;