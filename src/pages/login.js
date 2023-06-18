import React from "react";
import LoginComponent from "@/components/LoginComponent";
import ForgotSection from "@/components/ForgotSection";
import { useState } from "react";
import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
  const [forgot, setforgot] = useState(false);

  return (
    <>
      <Head>
        <title>Login | Spellmint</title>
      </Head>
      <div className="font-inter h-screen">
        <div className="flex h-full">
          <div className="w-[40%] py-8  flex flex-col my-auto">
            {!forgot ? (
              <LoginComponent
                toast={toast}
                forgotBool={() => setforgot(!forgot)}
              />
            ) : (
              <ForgotSection />
            )}
          </div>
          {/* <div className="w-[60%] w-full overflow-hidden">
          <img
            className="w-full"
            src="https://i.imgur.com/C1N7oXZ.png"
            alt=""
          />
        </div> */}
          <div className="w-[60%] flex bg-[url('https://i.imgur.com/C1N7oXZ.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        className="font-medium"
      />
    </>
  );
};

export default login;
