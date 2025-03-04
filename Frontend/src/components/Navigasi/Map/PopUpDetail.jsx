
import backIcon from "/assets/navigasi/back-icon.svg"
import AutoImageChanger from "../../../Animation/AutoImageChanger"
import PropTypes from "prop-types"

function PopUpDetail({onClick, title, detail, popImage, icons}){
    return(
        <>
            <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50'>
                <div className='w-11/12 md-2:w-3/5 xl:w-2/4 h-fit py-10 px-20 bg-[#F8F9FA] rounded-xl shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <button onClick={onClick} className="relative right-[40px] text-black hover:text-primary-600 transition duration-200 ease-in flex items-center justify-center">
                        <img src={backIcon} alt="" className="w-3 h-3"/>
                        <span className="ml-1 mb-[2px]">
                            kembali
                        </span>
                    </button>
                    <div className='flex flex-col items-center'>
                        <div className='w-full'>
                            <img src={popImage} className='w-full h-fit rounded-3xl mt-8 shadow-lg' alt="" />
                            <div className="absolute top-[55px] right-[40px] w-[100px] h-[100px] rounded-full bg-white shadow-xl flex justify-center items-center">
                                <AutoImageChanger icons={icons}/>
                            </div>
                        </div>
                        <h3 className='font-bold text-primary-600 text-2xl my-3'>{title}</h3>
                        <p className='text-center text-sm lg:text-lg'>{detail}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

PopUpDetail.propTypes = {
    onClick : PropTypes.func,
    title : PropTypes.string,
    detail : PropTypes.string,
    popImage : PropTypes.string,
    icons : PropTypes.arrayOf(PropTypes.string)
}

export default PopUpDetail