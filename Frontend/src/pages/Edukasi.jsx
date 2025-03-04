import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstHero from "../components/FirstHero";
import CardEdukasi from "../components/Edukasi/CardEdukasi";
import CardArtikel from "../components/Edukasi/CardArtikel";
import heroImg from "/assets/heroImg/edukasi-heroImg.png";
import dataEdukasi from "../data/dataEdukasi.json";
import dataArtikel from "../data/dataArtikel.json";
import FadeIn from "../Animation/ScrollAnimation/FadeIn";
import SlideInUp from "../Animation/ScrollAnimation/SlideInUp";

function Edukasi() {
  const titleHero = "Belajar Menanam dengan Mudah dan Terarah";

  return (
    <>
      <Navbar />
      <section className="pb-6 animate-fade-in">
        <FirstHero
          imageUrl={heroImg}
          title={titleHero}
        />
        <FadeIn>
          <h1 className="my-20 text-4xl font-bold text-center text-primaryColor">
            Cara Menanam Bibit
          </h1>
        </FadeIn>
        <FadeIn>
          <div className="flex w-full justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 ">
              {dataEdukasi.map((value, index) => (
                <CardEdukasi
                  key={index}
                  gambar={value.gambar}
                  langkah={value.langkah}
                  tataCara={value.tataCara}
                  tahapan={value.tahapan}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        <SlideInUp>
          <h2 className="mt-20 mb-11 text-center text-primaryColor font-['Poppins'] font-bold text-4xl">
            Artikel Terkait
          </h2>
        </SlideInUp>
        <SlideInUp>
          <div className="flex justify-center flex-wrap xl:flex-nowrap mt-5 gap-9 mb-12">
            {dataArtikel.map((value, index) => (
              <CardArtikel
                key={index}
                gambar={value.gambar}
                judul={value.judul}
                link={value.link}
              />
            ))}
          </div>
        </SlideInUp>
      </section>
      <Footer />
    </>
  );
}

export default Edukasi;