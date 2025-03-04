import ForgotPassForm from "../components/ForgotPassword/ForgotPassForm"
import ImageLogo from "/assets/logo-app.png"

function ForgotPassword(){
    return (
        <>
            <section className="flex flex-col min-h-screen justify-center items-center bg-gray-50 animate-fade-in">
                <div className="flex flex-col items-center bg-white py-10 px-20 rounded-md shadow-md">
                    <img src={ImageLogo} className="w-[148px] mb-4" alt="" />
                    <h4 className="mb-4 font-medium">Lupa Password?</h4>
                    <ForgotPassForm/>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword