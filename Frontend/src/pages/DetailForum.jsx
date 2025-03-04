import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Diskusi from "../data/dummy/diskusi-list.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailDiskusi from "../components/DiskusiDetail";
// import Reply from "../data/dummy/diskusi-reply-list.json";
import DiskusiReply from "../components/DiskusiReply";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import ForumReplyForm from "../components/Forum/ForumReplyForm";

function DetailForum() {
    const { parameter } = useParams();
    const { user } = useAuth();

    const [diskusi, setDiskusi] = useState({});
    const [replies, setReplies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchDiskusiAndReplies() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/forum/${parameter}`);
                setDiskusi(response.data.data.forum);

                const responseReplies = await axios.get(`${import.meta.env.VITE_APP_API_URL}/forum/${parameter}/replies`);
                setReplies(responseReplies.data.data.replies);
            } catch (error) {
                // TODO: handle error
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchDiskusiAndReplies();
    }, [parameter]);

    const fetchNewReply = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/forum/${parameter}/replies`);
            setReplies(response.data.data.replies);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Navbar />
            <section className="min-h-screen mb-12 px-16 max-md:px-6 animate-fade-in">
                <Link to={"/forum"} className="
                        text-primaryColor
                        text-2xl
                        hover:text-primaryColor
                        hover:underline
                        flex items-center
                        my-4
                    ">
                    <svg
                        className="size-5 fill-current text-primaryColor font-bold"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"><g
                            id="Back"
                        >
                            <path d="M14.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L6.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,14.5,22Z" /></g>
                    </svg>
                    Forum Diskusi
                </Link>
                {
                    !isLoading && (
                        Object.keys(diskusi).length > 0 ? (
                            <>
                                <DetailDiskusi
                                    photo={diskusi.photo}
                                    nama={diskusi.fullname}
                                    created_at={diskusi.created_at}
                                    judul={diskusi.title}
                                    deskripsi={diskusi.content}
                                    reply_count={diskusi.reply_count}
                                    tags={diskusi.tags}
                                />
                                {
                                    user && (
                                        <ForumReplyForm
                                            isLoading={isLoading}
                                            setIsLoading={setIsLoading}
                                            forumId={Number(parameter)}
                                            user={user}
                                            onReplyAdded={fetchNewReply}
                                        />
                                    )
                                }
                                <div className="">
                                    <h3 className="text-xl text-primaryColor my-4">
                                        Komentar
                                    </h3>
                                    {
                                        !isLoading && (
                                            replies.length === 0 ? (
                                                <h4 className="text-center text-lg text-gray-300">
                                                    Belum ada komentar
                                                </h4>
                                            ) : (
                                                <div className="flex flex-col gap-y-4">
                                                    {replies.map((value) => (
                                                        <DiskusiReply
                                                            key={value.id}
                                                            photo={value.photo}
                                                            name={value.fullname}
                                                            created_at={value.created_at}
                                                            comment={value.content}
                                                        />
                                                    ))}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </>
                        ) : (
                            <h4 className="my-16 text-center text-lg text-gray-300 col-span-8 xl:col-span-6">
                                Diskusi tidak ditemukan
                            </h4>
                        )
                    )
                }
            </section>
            <Footer />
        </>
    );
}

export default DetailForum;