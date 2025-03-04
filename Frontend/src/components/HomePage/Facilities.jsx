function Facilities(){
    return(
        <>
            <section className="px-2 lg:px-[72px] flex lg-2:flex-row flex-col">
                <div className="w-full lg-2:w-1/2 min-h-4 mr-4">
                    <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/fasilitas/taman-bermain.png')] bg-cover rounded-[10px] bg-center w-full h-[253px] p-[30px] mb-[16px]">
                        <h3 className="font-bold text-white text-3xl md:text-5xl drop-shadow-text">
                            Taman <br /> 
                            Bermain
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/fasilitas/rute-kebun.png')] bg-cover rounded-[10px] bg-center w-1/2 h-[253px] p-[30px] mr-4">
                            <h3 className="font-bold text-white text-3xl md:text-5xl drop-shadow-text">
                                Rute <br /> 
                                Kebun
                            </h3>
                        </div>

                        <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/fasilitas/wisata-kuliner.png')] bg-cover rounded-[10px] bg-center w-1/2 h-[253px] p-[30px] flex items-end">
                            <h3 className="font-bold text-white text-3xl md:text-5xl drop-shadow-text">
                                Wisata <br /> 
                                Kuliner
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full lg-2:w-1/2 min-h-4 flex mt-4 lg-2:mt-0">
                    <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out w-1/2 mr-4 bg-[url('./assets/fasilitas/mini-zoo.png')] bg-cover bg-center rounded-[10px] p-[30px]">
                        <h3 className="font-bold text-white text-3xl md:text-5xl drop-shadow-text">
                            Mini Zoo
                        </h3>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/fasilitas/study-tour.png')] bg-cover rounded-[10px] bg-center w-full h-[253px] p-[30px] mb-4 flex items-end">
                            <h3 className="font-bold text-white text-3xl md:text-5xl drop-shadow-text">
                                Study <br /> 
                                Tour
                            </h3>
                        </div>

                        <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/fasilitas/camp-area.png')] bg-cover rounded-[10px] bg-center w-full h-[253px] p-[30px]">
                            <h3 className="font-bold text-white text-3xl md:text-5xl drop-shadow-text">
                                Camp <br /> 
                                Area
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Facilities