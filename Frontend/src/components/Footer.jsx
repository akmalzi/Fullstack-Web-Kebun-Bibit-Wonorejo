import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
            <footer className="bg-primary-600 px-4 md-2:px-[72px]">
                <div className="mx-auto w-full py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="/assets/logo-app.png" className="h-12 me-3" alt="FlowBite Logo" />
                        </a>
                        <p className="mt-2">
                            Butuh bantuan? <br />
                            Hubungi kami untuk informasi lanjut
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-lg font-medium">Kontak</h2>
                            <ul className="text-black">
                                <li className="mb-2">
                                    <a href="https://flowbite.com/" className="font-[14px] hover:underline">kebunbibit@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="font-[14px] hover:underline">+62 12345678</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto">
                            <h2 className="mb-4 text-lg font-medium">Menu</h2>
                            <ul className="text-black">
                                <li className="mb-2">
                                    <Link to={"/profile"} className="hover:underline ">Profil Akun</Link>
                                </li>
                                <li>
                                    <Link to={"/ulasan"} className="hover:underline">Ulasan</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-lg font-medium">Informasi Lain</h2>
                            <ul className="text-black">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">FAQ</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Kebijakan Privasi</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer