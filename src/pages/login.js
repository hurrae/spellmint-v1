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
        <meta
          name="description"
          content="Swap chaos for clarity with Spellmint, the AI that turns brainstorming into brilliance. Equip your teams with cutting-edge planning tools for decision-making so smooth, it'll feel like gliding on air!"
        />
      </Head>
      <div className="font-inter h-screen">
        <div className="flex h-full">
          <div className="w-[100%] lg:w-[40%] py-8  flex flex-col my-auto">
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
          <div className="hidden lg:block w-[60%] flex bg-[url('https://i.imgur.com/ZD4cEUb.png')] bg-no-repeat bg-cover bg-center"></div>
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
