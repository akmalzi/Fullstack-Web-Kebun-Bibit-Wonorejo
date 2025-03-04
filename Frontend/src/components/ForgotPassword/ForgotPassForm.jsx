function htmlForgotPasshtmlForm(){
    return(
        <>
            <htmlForm className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white" placeholder="nama@gmail.com" required />
            </div>
            <p className="text-center mb-4">Tidak perlu khawatir, kami akan mengirimkan pesan untuk membantu Anda mengatur ulang kata sandi.</p>
            <button type="submit" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none transition fade-in focus:ring-primary-400 font-medium rounded-lg text-sm min-w-full px-5 py-2.5 text-center ">Submit</button>
            </htmlForm>
        </>
    )
}

export default htmlForgotPasshtmlForm