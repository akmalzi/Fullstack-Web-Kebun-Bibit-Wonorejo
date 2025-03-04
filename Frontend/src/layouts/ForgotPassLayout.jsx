import { Routes, Route } from "react-router-dom"
import ForgotPassword from "../pages/ForgotPassword"

function ForgotPassLayout(){
    return(
        <>
            <Routes>
                <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
            </Routes>
        </>
    )
}

export default ForgotPassLayout
