import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileMenu from "../components/ProfileMenu";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ChangePasswordForm from "../components/ChangePassword/ChangePasswordForm";

function ChangePassword() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const { user } = useAuth();

    const handleVisible = (num) => {
        switch (num) {
            case 1:
                setIsVisible1(!isVisible1);
                break;
            case 2:
                setIsVisible2(!isVisible2);
                break;
            default:
                setIsVisible3(!isVisible3);
        }
    }

    return (
        <>
            <Navbar />
            <section className="p-12 max-md:p-6 md:py-20 xl:px-20 md:px-40 animate-fade-in min-h-screen">
                <div className="flex xl:flex-row flex-col gap-x-8">
                    <div className="w-full order-2 xl:order-1 xl:w-3/4 border-[1px] border-gray-300 rounded-xl p-8 shadow-md max-md:py-8 max-md:px-4">
                        <h2 className="mb-8 text-2xl font-semibold text-primaryColor">
                            Ubah Password
                        </h2>
                        <ChangePasswordForm
                            isVisible1={isVisible1}
                            isVisible2={isVisible2}
                            isVisible3={isVisible3}
                            handleVisible={handleVisible}
                            user={user}
                        />
                    </div>
                    <div className="w-full order-1 mb-8 xl:order-2 xl:mb-0 xl:w-1/4">
                        <ProfileMenu user={user} fullName={`${user.fname + " " + user.lname}`} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ChangePassword;