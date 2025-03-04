import RegisterForm from "../components/Register/RegisterForm"

function RegisterPage(){
    return (
        <>
            <section className="min-h-screen justify-center flex animate-fade-in">
                <div className="min-h-screen w-full md:w-5/6 xl:w-1/2 flex flex-col items-center justify-center px-8 md:px-32 xl:order-2">
                    <h2 className="text-[32px] w-full font-bold text-primaryColor mb-9">Hai, selamat datang! Daftar sekarang untuk memulai!</h2>
                    <RegisterForm/>
                </div>
                <div className="w-1/2 min-h-screen p-[30px] hidden xl:flex items-end bg-[url('./assets/register-img.png')] bg-cover bg-center order-1">
                    <h3 className="font-bold text-white text-2xl drop-shadow-text">
                        daftarkan dirimu sekarang!
                    </h3>
                </div>
            </section>
        </>
    )
}

export default RegisterPage