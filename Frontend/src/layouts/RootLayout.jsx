import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Katalog from "../pages/Katalog";
import DetailKatalog from "../pages/DetailKatalog";
import Edukasi from "../pages/Edukasi";
import Forum from "../pages/Forum";
import DetailForum from "../pages/DetailForum";
import Ulasan from "../pages/Ulasan";
import Telusuri from "../pages/Telusuri";
import { AuthProvider, useAuth } from "../context/AuthContext";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFound";

function RootLayout() {
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/katalog"} element={<Katalog />} />
        <Route path="/katalog/:parameter" element={<DetailKatalog />} />
        <Route path={"/edukasi"} element={<Edukasi />} />
        <Route path={"/forum"} element={<Forum />} />
        <Route path={"/forum/:parameter"} element={<DetailForum />} />
        <Route path={"/telusuri"} element={<Telusuri />} />
        <Route path={"/ulasan"} element={<Ulasan />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/ubah-password" element={<ChangePassword />} />
        </Route>
        <Route element={<AuthorizedLayout />}>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
    </>
  );
}

function ProtectedLayout() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={"/login"} />;
}

function AuthorizedLayout() {
  const { user } = useAuth()

  return !user ? <Outlet /> : <Navigate to={"/"} />
}

export default RootLayout;
