import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import CardKatalog from "../components/Katalog/CardKatalog"
// import dataKatalog from "../data/dummy/katalog.json" 
import heroImg from "/assets/heroImg/katalog-heroImg.png"
import FadeIn from "../Animation/ScrollAnimation/FadeIn"
import axios from "axios"
import { useEffect, useState } from "react"

function Katalog() {
    const [dataKatalog, setDataKatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getKatalogData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/bibit/`);
                setDataKatalog(response.data.data.bibits);
            } catch (error) {
                console.error(error);
                // TODO: handle error
            } finally {
                setIsLoading(false);
            }
        }

        getKatalogData();
    }, [])

    const heroTitle = "Katalog Koleksi Bibit Kebun Bibit Wonorejo"
    // const heroSubtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas? Fugit neque debitis accusantium nihil deserunt error nisi et."

    return (
        <>
            <Navbar />
            <section className="pb-4 animate-fade-in">
                <FirstHero imageUrl={heroImg} title={heroTitle} />
                <FadeIn>
                    <div className="flex flex-col items-center mt-[72px]">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-primaryColor mb-[64px]">Temukan ragam bibit unggul untuk <br />
                            mempercantik lingkungan Anda</h1>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="flex justify-center items-center">
                        {
                            !isLoading && (
                                dataKatalog.length > 0 ? (
                                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                                        {/* TODO: implement loading skeleton */}
                                        {dataKatalog.map((value, index) => (
                                            <CardKatalog
                                                key={index}
                                                parameter={value.id}
                                                namaAsli={value.title}
                                                namaLatin={value.latin}
                                                image={value.image}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <h4 className="text-center text-lg text-gray-300 col-span-8 xl:col-span-6 mb-[72px]">
                                        Tidak ada katalog tanaman
                                    </h4>
                                )
                            )
                        }
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </>
    )
}

export default Katalog