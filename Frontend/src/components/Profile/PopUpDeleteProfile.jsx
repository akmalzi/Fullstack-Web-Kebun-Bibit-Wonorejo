import PropTypes from "prop-types"

function PopUpDeletePhotoProfile(props) {
    return (
        <div
            className="w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50"
        >
            <div className="w-fit max-md:w-full h-fit bg-[#F8F9FA] rounded-md overflow-hidden shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex justify-between bg-primaryColor py-4 px-8">
                    <span className="text-white text-xl">
                        Konfirmasi Hapus Foto Profil
                    </span>
                </div>
                <div className="py-8 px-8">
                    <p className="text-lg text-gray-500">
                        Apakah Anda yakin ingin menghapus foto profil?
                    </p>
                    <div className="flex justify-end gap-x-4 mt-8">
                        <button
                            type="button"
                            className={`transition-colors py-2 px-8 rounded-md font-semibold hover:bg-deleteHoverColor text-white ${props.isLoading ? "bg-deleteHoverColor" : "bg-deleteColor"}`}
                            onClick={props.handleDeletePhoto}
                        >
                            {props.isLoading ? "Menghapus Photo..." : "Ya"}
                        </button>
                        <button
                            type="button"
                            className="transition-colors py-2 px-8 rounded-md font-semibold text-white bg-primaryColor hover:bg-hoverPrimaryColor"
                            onClick={props.onClick}
                        >
                            Tidak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

PopUpDeletePhotoProfile.propTypes = {
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
    handleDeletePhoto: PropTypes.func
}

export default PopUpDeletePhotoProfile