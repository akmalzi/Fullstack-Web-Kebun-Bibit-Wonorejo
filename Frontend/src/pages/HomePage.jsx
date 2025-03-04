import FirstHero from "../components/FirstHero";
import SecondHero from "../components/HomePage/SecondHero";
import Facilities from "../components/HomePage/Facilities";
import CustomerReviews from "../components/HomePage/CustomersReview";
import MapSection from "../components/HomePage/MapSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SlideInUp from "../Animation/ScrollAnimation/SlideInUp";
import SlideInRight from "../Animation/ScrollAnimation/SlideInRight";
import SlideInLeft from "../Animation/ScrollAnimation/SlideInLeft";
import FadeIn from "../Animation/ScrollAnimation/FadeIn";
import heroImg from "/assets/heroImg/homepage-heroImg.png";
import { useEffect, useRef, useState } from "react";
import Tooltip from "../components/HomePage/ToolTip";
import { Link } from "react-router-dom";

function HomePage() {
  const heroTitle = "Jelajahi Keindahan Kebun Bibit Wonorejo";
  const heroSubtitle = "Tempat di mana alam dan kehijauan menyatu";

  const stickyButtonRef = useRef(null);
  const footerRef = useRef(null);

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const button = stickyButtonRef.current;
      const footer = footerRef.current;

      if (button && footer) {
        const footerRect = footer.getBoundingClientRect();
        const buttonHeight = button.offsetHeight;

        if (footerRect.top - window.innerHeight + buttonHeight - 50 <= 0) {
          button.style.transform = `translateY(${
            footerRect.top - window.innerHeight + buttonHeight - 50
          }px)`;
        } else {
          button.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="pb-4">
        <FirstHero
          imageUrl={heroImg}
          title={heroTitle}
          subTitle={heroSubtitle}
        />
        <SlideInLeft>
          <SecondHero />
        </SlideInLeft>
        <SlideInRight>
          <Facilities />
        </SlideInRight>
        <FadeIn>
          <CustomerReviews />
        </FadeIn>
        <SlideInUp>
          <MapSection />
        </SlideInUp>
      </section>
      <div>
        <Link
          ref={stickyButtonRef}
          id="stickyButton"
          to={"/telusuri"}
          className="bg-primaryColor fixed z-[9999] bottom-10 right-10 w-20 h-20 rounded-full "
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className=" bottom-10 right-10 w-20 h-20 block rounded-full ">
            <img
              src="/assets/location-icon.svg"
              width={40}
              alt=""
              className="mx-auto mt-5 fill-white"
            />
            {showTooltip && <Tooltip />}
          </div>
        </Link>
      </div>
      <div id="footer" ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
