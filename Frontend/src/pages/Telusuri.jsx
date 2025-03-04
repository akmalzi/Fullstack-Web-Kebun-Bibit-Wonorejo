import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstHero from "../components/FirstHero";
import Map from "../components/Navigasi/Map";
import CardFavFasilitas from "../components/Navigasi/CardFavFasilitas";
import heroImg from "/assets/heroImg/navigasi-heroImg.png";
import SlideInUp from "../Animation/ScrollAnimation/SlideInUp";
import FadeIn from "../Animation/ScrollAnimation/FadeIn";
import dataPeta from "../data/dataPeta.json";

function Telusuri() {
  const title = "Navigasi Kebun Bibit Wonorejo";
  const subTitle = "Temukan berbagai fasilitas menarik di Kebun Bibit Wonorejo, mulai dari pusat informasi bibit hingga ruang belajar yang nyaman, semuanya dirancang untuk membantu Anda memahami cara menanam dan merawat tanaman dengan baik.";

  return (
    <>
      <Navbar />
      <section className="pb-4 animate-fade-in">
        <FirstHero imageUrl={heroImg} title={title} subTitle={subTitle} />
        <div className="mt-20 px-4 md:px-20">
          <SlideInUp>
            <h2 className="text-end text-4xl font-bold text-primaryColor">
              Temukan Spot Menarik <br />
              di Kebun Bibit Wonorejo
            </h2>
          </SlideInUp>

          <Map />

          <SlideInUp>
            <h2 className="text-3xl text-center mt-[166px] font-semibold ">
              Tempat Favorit Pengunjung
            </h2>
            <h2 className="text-3xl pb-8 text-center mt-2 font-semibold text-primaryColor md:mb-10 ">
              Kebun Bibit Wonorejo
            </h2>
          </SlideInUp>

          <div className="w-full flex-wrap lg:flex-no flex justify-evenly mt-2 xl:mt-6 mb-16 ">
              <CardFavFasilitas
                popImage={dataPeta[2].image}
                tag="/assets/navigasi/fasilitas1.png"
                title={dataPeta[2].title}
                detail={dataPeta[2].detail}
                icons={dataPeta[2].icons}
              />

              <CardFavFasilitas
                popImage={dataPeta[8].image}
                tag="/assets/navigasi/fasilitas2.png"
                title={dataPeta[8].title}
                detail={dataPeta[8].detail}
                icons={dataPeta[8].icons}
              />

              <CardFavFasilitas
                popImage={dataPeta[12].image}
                tag="/assets/navigasi/fasilitas3.png"
                title={dataPeta[12].title}
                detail={dataPeta[12].detail}
                icons={dataPeta[12].icons}
              />
          </div>
        </div>

        <FadeIn>
          <div className="w-full pb-10 flexabsolute text-center justify-center mt-52 md:mt-32">
            <span className="text-[#000000] text-4xl font-bold font-['Poppins'] ">
              Fasilitas
            </span>{" "}
            <br />
            <span className="text-[#77b122] text-4xl font-semibold font-['Poppins']">
              Kebun Bibit
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex overflow-x-auto p-4 mb-4">
            <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
              <img
                src="/assets/fasilitas/camp-ground.png"
                width={575}
                alt=""
                className="object-cover rounded-lg shadow-lg"
              />
              <span className="absolute bottom-0 left-0 right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                Ground Camp
              </span>
            </div>
            <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
              <img
                src="/assets/fasilitas/event-gathering.png"
                width={575}
                alt=""
                className="object-cover rounded-lg shadow-lg"
              />
              <span className="absolute top-0 leading-[48px] tracking-wide right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                Event &<br /> Gathering
              </span>
            </div>
            <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
              <img
                src="/assets/fasilitas/edukasi-pembibitan.png"
                width={575}
                alt=""
                className="object-cover rounded-lg shadow-lg"
              />
              <span className="absolute bottom-0 left-0 right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                Edukasi <br />
                Pembibitan
              </span>
            </div>
            <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
              <img
                src="/assets/fasilitas/jogging-track.png"
                width={575}
                alt=""
                className="object-cover rounded-lg shadow-lg"
              />
              <span className="absolute top-0 leading-[48px] tracking-wide right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                Jogging <br />
                Track
              </span>
            </div>
          </div>
        </FadeIn>
      </section>
      <Footer />
    </>
  );
}

export default Telusuri;
