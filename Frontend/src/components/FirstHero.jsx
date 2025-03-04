import PropTypes from "prop-types"
import { useState, useEffect} from "react"

function FirstHero(props){
    const [title, setTitle] = useState(null)
    const [subTitle, setSubTitle] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(()=>{
        setTitle(props.title)
        setSubTitle(props.subTitle)
        setImageUrl(props.imageUrl)
    },[])

    return (
        <>
            <section className="px-2 lg:px-[18px] z-0">
                <div className={`w-full h-[380px] md:h-[452px] lg:h-[604px] bg-cover bg-center rounded-3xl shadow-lg`} style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="relative top-0 py-10 px-4 md:px-6 md-2:px-10 lg:px-14">
                        <h1 className="text-[40px] md:text-[48px] md-2:text-[56px] lg:text-[64px] font-bold text-white leading-[120%] drop-shadow-text w-full md-2:w-5/6 lg:w-4/6 font-poppins">{title}</h1>
                        <h3 className="text-lg md:text-xl lg:text-2xl text-white font-normal mt-2 w-full md-2:w-5/6 lg:w-4/6">{subTitle}</h3>
                    </div>
                </div>
            </section>  
        </>
    )
}

FirstHero.propTypes = {
    title : PropTypes.string,
    subTitle : PropTypes.string,
    imageUrl : PropTypes.string
}


export default FirstHero