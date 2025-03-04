import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";

function PopUpDiskusi(props) {
    const { register, control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    });

    const watchTags = watch("tags", []);

    const handleSelectTag = (tag) => {
        const currentTags = watchTags || [];
        const isTagSelected = currentTags.some(currentTag => currentTag === tag.id);
        
        const updatedTags = isTagSelected
            ? currentTags.filter(currentTag => currentTag !== tag.id)
            : [...currentTags, tag.id];
        
        setValue("tags", updatedTags, { shouldValidate: true });
    }

    return (
        <div
            className="w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50"
        >
            <div className="w-1/2 max-lg:w-full h-fit bg-[#F8F9FA] rounded-md overflow-hidden shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex justify-between bg-primaryColor py-4 px-8">
                    <span className="text-white text-xl">
                        Diskusi Baru
                    </span>
                    <button onClick={props.onClick}>
                        <svg className="size-6 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="py-12 px-8">
                    <form id="diskusiForm" className="flex flex-col gap-y-6" onSubmit={handleSubmit(props.onSubmit)}>
                        <label htmlFor="judulDiskusi">
                            Judul
                            <input
                                className="w-full p-2 rounded-md"
                                type="text"
                                name="judul"
                                id="judulDiskusi"
                                placeholder="Tulis Judul Diskusi"
                                {...register("judul", {
                                    required: "Judul tidak boleh kosong"
                                })}
                            />
                            {errors.judul && <span className="text-red-500 text-sm">{errors.judul.message}</span>}
                        </label>
                        <label htmlFor="deskripsiDiskusi">
                            Deskripsi
                            <textarea
                                className="w-full p-2 rounded-md"
                                rows={5}
                                name="deskripsi"
                                id="deskripsiDiskusi"
                                placeholder="Tambahkan sebanyak mungkin detail, dengan memberikan detail Anda akan memudahkan orang lain untuk membalas."
                                style={{ resize: "none" }}
                                {...register("deskripsi", {
                                    required: "Deskripsi tidak boleh kosong"
                                })}
                            />
                            {errors.deskripsi && <span className="text-red-500 text-sm">{errors.deskripsi.message}</span>}
                        </label>
                        <label htmlFor="Tag">
                            Tag
                            <Controller
                                name="tags"
                                control={control}
                                defaultValue={[]}
                                render={({ field: { value }}) => (
                                    <div className="flex flex-wrap gap-2">
                                        {props.tags.map((tag) => (
                                            <button
                                                key={tag.id}
                                                type="button"
                                                onClick={() => { handleSelectTag(tag); }}
                                                className={`transition-colors px-4 py-2 rounded-md ${value.some(value => value === tag.id)
                                                    ? 'bg-primaryColor text-white'
                                                    : 'bg-white text-black hover:text-white hover:bg-primaryColor'
                                                    }`}
                                            >
                                                {tag.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            />
                        </label>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                form="diskusiForm"
                                className="w-fit px-4 bg-primaryColor text-white py-2 rounded-md hover:bg-hoverPrimaryColor"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

PopUpDiskusi.propTypes = {
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string
    })),
    isLoading: PropTypes.bool
}

export default PopUpDiskusi;