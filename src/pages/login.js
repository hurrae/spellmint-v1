import React from "react";
import LoginComponent from "@/components/LoginComponent";
import ForgotSection from "@/components/ForgotSection";
import { useState } from "react";

const login = () => {
  const [forgot, setforgot] = useState(false);

  return (
    <div className="font-inter h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
        <div className="col-span-1 py-8 flex flex-col my-auto">
          {!forgot ? (
            <LoginComponent forgotBool={() => setforgot(!forgot)} />
          ) : (
            <ForgotSection />
          )}
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h3>Hello World</h3>
        </div>
      </div>
    </div>
  );
};

export default login;
