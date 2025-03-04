import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import { useAuth, AuthProvider } from "../context/AuthContext"

function AuthLayout() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route element={<AuthorizedLayout />}>
                        <Route path={"/login"} element={<LoginPage />} />
                        <Route path={"/register"} element={<RegisterPage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    )
}

function AuthorizedLayout() {
    const user = useAuth()

    return user ? <Outlet /> : <Navigate to={"/"} />
}

export default AuthLayout