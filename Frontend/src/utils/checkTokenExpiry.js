import { jwtDecode } from "jwt-decode";

export function checkTokenExpiry(token) {
    try {
        const decodedToken = jwtDecode(token);
    
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return true;
        }
    } catch (error) {
        console.error(error);
        return true;
    }

    return false;
}

export function isValidJwt(token) {
    if (!token || typeof token !== "string") return false;
  
    const parts = token.split(".");
    return parts.length === 3;
  }