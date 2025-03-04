import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FadeIn from "../Animation/ScrollAnimation/FadeIn"
// import Diskusi from "../data/dummy/diskusi-list.json"
import { Link, useSearchParams } from "react-router-dom"
import MainDiskusi from "../components/MainDiskusi"
import ForumUtils from "../components/ForumUtils"
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"

function Forum() {
    const [searchParams] = useSearchParams();
    const searchTag = searchParams.get("tag");
    const { user } = useAuth();

    const [forum, setForum] = useState([]);
    const [filteredForum, setFilteredForum] = useState([]);
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        async function fetchForumAndTags() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/forum`);
                setForum(response.data.data.forums);
                setFilteredForum(response.data.data.forums);

                const responseTags = await axios.get(`${import.meta.env.VITE_APP_API_URL}/tag`);
                setTags(responseTags.data.data.tags);
            } catch (error) {
                // TODO: handle error   
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchForumAndTags();
    }, []);

    function handleChangeSearch(event) {
        const keyword = event.target.value.toLowerCase();
        const filterForum = forum.filter((value) => {
            return value.title.toLowerCase().includes(keyword);
        });

        setFilteredForum(filterForum);
    }

    function handleOrderChange(event) {
        const order = event.target.value;
        const orderForum = [...filteredForum];
        if (order === "asc") {
            orderForum.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
        } else if (order === "desc") {
            orderForum.sort((a, b) => {
                return new Date(a.created_at) - new Date(b.created_at);
            });
        }

        setFilteredForum(orderForum);
    }

    useEffect(() => {
        if (searchTag) {
            const filterForum = forum.filter((value) => {
                return value.tags.some(tags => tags.name.toLowerCase() === searchTag.replace('+', ' ').toLowerCase());
            });

            setFilteredForum(filterForum);
        } else {
            setFilteredForum(forum);
        }
    }, [searchTag, forum]);

    const handleSubmit = async (data) => {
        setIsLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_APP_API_URL}/forum/create`, {
                title: data.judul,
                content: data.deskripsi,
                tags: data.tags
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            toast.success("Diskusi berhasil dikirim");
            setIsOpen(false);
            handleDiskusiSubmit();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data.message || "Terjadi kesalahan saat mengirim diskusi");
        } finally {
            setIsLoading(false);
        }
    }

    const handleDiskusiSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/forum`);
            setForum(response.data.data.forums);
            setFilteredForum(response.data.data.forums);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            <section className="mb-12 md:px-16 px-4 animate-fade-in min-h-screen">
                <FadeIn>
                    <h1 className="my-12 text-4xl font-bold text-primaryColor">
                        Forum Diskusi
                    </h1>
                </FadeIn>
                <FadeIn>
                    <div className="grid grid-cols-8 max-lg:flex max-lg:flex-col xl:grid-rows-1 justify-between gap-x-16">
                        <div className="col-span-2 row-start-1 mb-12 xl:mb-0">
                            <ForumUtils
                                // placeholder for onSearchChange and onOrderChange 
                                onSearchChange={(e) => handleChangeSearch(e)}
                                onOrderChange={(e) => handleOrderChange(e)}
                                onSubmit={handleSubmit}
                                tags={tags}
                                user={user}
                                isLoading={isLoading}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                searchTag={searchTag}
                            />
                        </div>
                        {
                            !isLoading && (
                                filteredForum.length > 0 ? (
                                    <div className="col-span-6 flex flex-col gap-y-8">
                                        {filteredForum.map((value) => (
                                            <Link key={value.id} to={`/forum/${value.id}`}>
                                                <MainDiskusi
                                                    photo={value.photo}
                                                    nama={value.fullname}
                                                    created_at={value.created_at}
                                                    judul={value.title}
                                                    deskripsi={value.content}
                                                    reply_count={value.reply_count}
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <h4 className="text-center text-lg text-gray-300 col-span-8 xl:col-span-6">
                                        Tidak ada diskusi
                                    </h4>
                                )
                            )
                        }
                    </div>
                </FadeIn>
            </section >
            <Footer />
        </>
    )
}

export default Forum