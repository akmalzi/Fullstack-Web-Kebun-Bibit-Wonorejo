import PropTypes from "prop-types";

function CardEdukasi({ gambar, langkah, tataCara, tahapan }) {
  return (
    <>
      <div className="flex flex-col xl:grid xl:grid-rows-1 grid-cols-4 mb-10">
        <div className="">
          <img
            width={200}
            src={gambar}
            alt="katalog1"
            className="rounded-[10px] mx-auto"
          />
        </div>
        <div className="text-[#717575] text-2xl col-span-3 font-medium font-['Lora'] pl-7 pr-14">
          <h2 className="text-black text-2xl leading-relaxed font-['Poppins']">{langkah}</h2>

          <span className="text-[#717575] font-['Poppins'] text-xl font-medium">
            {tataCara}
            <ul className="ml-12 pr-14 list-disc">
              {tahapan.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

CardEdukasi.propTypes = {
  gambar: PropTypes.string,
  langkah: PropTypes.string,
  tataCara: PropTypes.string,
  tahapan: PropTypes.arrayOf(PropTypes.string),
};

export default CardEdukasi;
