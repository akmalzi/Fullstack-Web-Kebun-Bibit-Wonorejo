import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { checkTokenExpiry, isValidJwt } from "../utils/checkTokenExpiry";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userStorage = localStorage.getItem("user");

        if(token && isValidJwt(token)) {
            if (checkTokenExpiry(token)) {
                setUser(null);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                toast.error("Token anda sudah tidak valid, mohon login kembali");
            } else {
                setUser({
                    ...JSON.parse(userStorage),
                    token: token,
                });
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}; 