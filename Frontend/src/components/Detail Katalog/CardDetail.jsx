import PropTypes from "prop-types";

function CardDetail({ judul, namaLatin, penjelasan, gambar }){
  return (
    <>
      <div className="w-full px-4 xl:px-20 h-fit my-8 xl:my-20">
        <div className="flex mt-11 flex-col md-2:flex-row">
          <div className="flex flex-col xl:items-center xl:flex-row w-full mx-auto xl:w-5/12">
            <h1 className="block md-2:hidden align-start text-primary-600 text-[40px] font-bold font-poppins mb-2">
            {judul}
            </h1>
            <img src={`${import.meta.env.VITE_APP_API_IMAGE_URL}/bibit/${gambar}`} alt={gambar} className="xl:w-full h-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full mt-4 xl:mt-0 xl:w-7/12 flex flex-col px-0 md-2:px-4 justify-center">
            <h1 className="hidden md-2:block text-primary-600 text-[40px] font-bold font-poppins">
              {judul}
            </h1>
            <h2 className="text-primary-500 text-[32px] font-bold font-poppins">
              {namaLatin}
            </h2>
            <p className="text-black text-[20px] font-regular font-poppins mt-4">
              {penjelasan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

CardDetail.propTypes = {
  judul:PropTypes.string,
  namaLatin : PropTypes.string,
  penjelasan : PropTypes.string,
  gambar : PropTypes.string
}

export default CardDetail;
