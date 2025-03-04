import SlideInUpAnimation from "../../Animation/ScrollAnimation/SlideInUp"

function SecondHero(){
    return (
        <>
            <section className="flex px-[18px] justify-center">
                <SlideInUpAnimation>
                    <div className="flex py-20 px-2 lg:px-16 h-fit lg:">
                        <div className="w-full lg:w-1/2 min-h-full flex items-center">
                            <div>
                                <h2 className="text-primary-600 text-center lg:text-start text-[42px] lg:text-[56px] leading-[110%] font-bold">
                                    Kebun Bibit <br />
                                    Wonorejo
                                </h2>
                                <p className="text-center lg:text-start text-[20px] font-normal mt-[36px] lg:mr-12 leading-[140%]">
                                    Kebun Bibit Wonorejo adalah ruang hijau yang menawarkan keindahan alam, beragam tanaman, dan pengalaman belajar yang interaktif tentang bagaimana menanam dan merawat tanaman. Temukan ragam flora khas dan nikmati suasana yang asri di tengah kota.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:w-1/2 lg:flex justify-center bg-[url('./assets/heroImg/hero2-img.png')] rounded-3xl bg-cover min-h-[371px] shadow-2xl">
                        </div>
                    </div>
                </SlideInUpAnimation>
            </section>
        </>
    )
}

export default SecondHero