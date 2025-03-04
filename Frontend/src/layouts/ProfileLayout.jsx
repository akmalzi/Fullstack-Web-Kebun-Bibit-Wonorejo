import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import Profile from "../pages/Profile"
import ChangePassword from "../pages/ChangePassword"
import { AuthProvider, useAuth } from "../context/AuthContext"

function ProfileLayout() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<ProtectedLayout />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/ubah-password" element={<ChangePassword />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}

function ProtectedLayout() {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProfileLayout