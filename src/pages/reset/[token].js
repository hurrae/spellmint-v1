import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ResetSection from "@/components/ResetSection";

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
    valid && (
      <div className="t h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
          <div className="col-span-1 lg:col-span-2">
            <h3>Reset Page</h3>
          </div>
          <div className="col-span-1 py-8 flex flex-col my-auto">
            <ResetSection resetToken={token} />
          </div>
        </div>
      </div>
    )
  );
};

export default reset;
