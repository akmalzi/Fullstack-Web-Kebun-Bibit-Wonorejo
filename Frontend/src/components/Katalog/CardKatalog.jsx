import { Link } from "react-router-dom";

function cardKatalog({ namaAsli, namaLatin, image, parameter }){
  return (
    <Link to={`/katalog/${parameter}`} className="mx-0 md:mx-4 md-2:mx-6 mb-8">
      <div className="border-2  md:w-[320] md-2:w-[360px] text-white rounded-lg shadow-md pb-4">
        <img src={`${import.meta.env.VITE_APP_API_IMAGE_URL}/bibit/${image}`} alt="katalog1" className="rounded-[10px] w-full"/>
        <h2 className="text-black text-xl lg:text-2xl font-bold mx-3 mt-2">
          {namaAsli}
        </h2>
        <h3 className="text-black text-lg lg:text-2xl font-normal mx-3">
          {namaLatin}
        </h3>
      </div>
    </Link>
  );
};

export default cardKatalog;
