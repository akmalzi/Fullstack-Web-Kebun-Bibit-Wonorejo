import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UlasanList from "../components/Ulasan/UlasanList"
import UlasanForm from "../components/Ulasan/UlasanForm"
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function Ulasan() {
    const [activeSection, setActiveSection] = useState("ulasan-form"); // Keeps track of the active section
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [avgRating, setAvgRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);

    const togglePopup = (section) => {
        setActiveSection(section === activeSection ? null : section)
    };

    useEffect(() => {
        async function getReviews() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/rating`);
                setReviews(response.data.data.ratings);
            } catch (error) {
                // TODO: handle error
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        getReviews();
    }, []);

    useEffect(() => {
        function getAvgRating() {
            if (reviews.length > 0) {
                const totalRating = reviews.reduce((acc, curr) => acc + curr.score, 0);
                const avgRating = totalRating / reviews.length;
                setAvgRating(Number(avgRating).toPrecision(2));
            } else {
                setAvgRating(0);
            }
        }

        function getReviewCount() {
            setTotalReviews(reviews.length);
        }

        getAvgRating();
        getReviewCount();
    }, [reviews])

    const handleReviewSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/rating`);
            setReviews(response.data.data.ratings);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            <ul className="lg:hidden flex mt-4">
                <li><button className="mx-3 text-lg transition duration-200 ease-in text-black hover:text-primary-600" onClick={() => togglePopup("ulasan-form")}>Ulasan Form</button></li>
                <li><button className="mx-3 text-lg transition duration-200 ease-in text-black hover:text-primary-600" onClick={() => togglePopup("ulasan-list")}>Ulasan List</button></li>
            </ul>
            <section className="flex h-lvh bg-white animate-fade-in">
                <div className="hidden lg:block lg:w-2/6 min-h-lvh">
                    <UlasanForm user={user} avgRating={avgRating} totalReviews={totalReviews} handleReviewSubmit={handleReviewSubmit}/>
                </div>
                <div className="hidden lg:block lg:w-4/6 min-h-lvh overflow-y-auto">
                    <UlasanList isLoading={isLoading} reviews={reviews} />
                </div>
                <div>
                    {activeSection === "ulasan-form" &&
                        <div className="w-screen lg:hidden h-lvh">
                            <UlasanForm onClick={() => togglePopup("ulasan-form")} />
                        </div>
                    }
                    {activeSection === "ulasan-list" &&
                        <div className="w-full lg:hidden h-lvh overflow-y-auto">
                            <UlasanList isLoading={isLoading} reviews={reviews} onClick={() => togglePopup("ulasan-list")} />
                        </div>
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Ulasan