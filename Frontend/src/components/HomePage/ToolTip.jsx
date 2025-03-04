function Tooltip(){
    return (
      <div className="w-[686px] h-[110px] bg-white pt-8 pl-6 rounded-2xl shadow-xl fixed bottom-0 right-24 transform ">
        <div className="text-black text-base font-medium font-['Poppins']">
          Tak perlu bingung di Kebun Bibit Wonorejo! Jelajahi dengan peta
          interaktif. Lihat di sini! →{" "}
          <span className="text-blue-600"> Navigasi </span>
        </div>
      </div>
    );
  };
  
  export default Tooltip;
  