import PropTypes from "prop-types"
import { useState } from "react"

function SecondHero(props){
    const [imageUrl, setImageUrl] = useState(props.imageUrl)

    return (
        <>
            <section className="px-2 lg:px-[18px] z-0">
                <div className={`w-full h-[380px] md:h-[452px] lg:h-[604px] bg-cover bg-center rounded-3xl shadow-lg`} style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="relative h-full flex justify-center items-center top-0 py-10 px-4 md:px-6 md-2:px-10 lg:px-14">
                        <h1 className="text-center text-[40px] md:text-[48px] md-2:text-[56px] lg:text-[64px] font-bold text-white leading-[120%] drop-shadow-text w-full md-2:w-5/6 lg:w-4/6 font-poppins">{props.title}</h1>
                    </div>
                </div>
            </section>  
        </>
    )
}

SecondHero.propTypes = {
    title : PropTypes.string,
    subTitle : PropTypes.string,
    imageUrl : PropTypes.string
}


export default SecondHero