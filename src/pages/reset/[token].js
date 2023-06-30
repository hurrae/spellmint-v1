import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ResetSection from "@/components/ResetSection";
import Head from "next/head";

const reset = () => {
  const router = useRouter();
  const { token } = router.query;
  const [valid, setvalid] = useState(false);

  useEffect(() => {
    token && console.log("check1");
    token &&
      axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_HOST}/api/reset/${token}`,
        data: {},
      }).then(function (res) {
        console.log(res, "check reset");
        if (res.status == 200) {
          setvalid(true);
        }
      });
  }, [token]);

  return (
    <>
      <Head>
        <title>Spellmint - Password Reset</title>
      </Head>
      {valid && (
        <div className="font-inter h-screen">
          <div className="flex h-full">
            <div className="w-[100%] lg:w-[40%] py-8  flex flex-col my-auto">
              <ResetSection resetToken={token} />
            </div>
            <div className="hidden lg:block w-[60%] flex bg-[url('https://i.imgur.com/ZD4cEUb.png')] bg-no-repeat bg-cover bg-center"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default reset;
