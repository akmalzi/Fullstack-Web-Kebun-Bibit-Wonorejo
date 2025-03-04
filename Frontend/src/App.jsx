import { useState, useEffect } from "react"
import RootLayout from "./layouts/RootLayout"
// import AuthLayout from "./layouts/AuthLayout"
// import ForgotPassLayout from "./layouts/ForgotPassLayout"
import ImageLogo from "/assets/logo-app.png"
// import ProfileLayout from "./layouts/ProfileLayout"
// import WildcardLayout from "./layouts/WildcardLayout"
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-poppins">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <img src={ImageLogo} className="w-[300px] absolute top-1/2 -translate-y-1/2 animate-fade-in-out" alt="Loading Logo" />
        </div>
      ) : (
        <div className="opacity-0 animate-fade-in">
          <Toaster 
            toastOptions={
              {
                position: "top-center",
                className: "",
                success: {
                  style: {
                    background: "#74BA10",
                    color: "#ffffff",
                  },
                },
                error: {
                  style: {
                    background: "#b91c1c",
                    color: "#ffffff",
                  },
                }
              }
            }
          />
          <RootLayout />
          {/* <AuthLayout />
          <ForgotPassLayout />
          <ProfileLayout />
          <WildcardLayout /> */}
        </div>
      )}
    </div>
  );
}

export default App