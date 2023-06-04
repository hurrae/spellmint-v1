import React from "react";
import LoginComponent from "@/components/LoginComponent";
import ForgotSection from "@/components/ForgotSection";
import { useState } from "react";
const login = () => {
  const [forgot, setforgot] = useState(false);

  return (
    <div className="font-inter h-screen">
      <div className="flex h-full">
        <div className="w-[35%] py-8  flex flex-col my-auto">
          {!forgot ? (
            <LoginComponent forgotBool={() => setforgot(!forgot)} />
          ) : (
            <ForgotSection />
          )}
        </div>
        <div className="w-[65%] w-full overflow-hidden">
          <img
            className="w-full h-[120vh]"
            src="https://i.imgur.com/C1N7oXZ.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default login;
