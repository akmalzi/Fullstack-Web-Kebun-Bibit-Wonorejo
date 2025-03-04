import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="animate-fade-in">
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-9xl max-md:text-6xl font-semibold">
                    404
                </h1>
                <h2 className="text-4xl max-md:text-2xl font-semibold">
                    Halaman tidak ditemukan
                </h2>
                <Link to={"/"} className="mt-8 text-2xl transition-colors text-primaryColor hover:text-hoverPrimaryColor">
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;