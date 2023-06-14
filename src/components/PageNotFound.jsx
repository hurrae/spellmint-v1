import React from "react";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";

const PageNotFound = () => {
  const { expand } = useContext(StateContext);
  return (
    <div className={`p-6 h-screen ${expand ? "ml-64" : "ml-20"} flex `}>
      {/* <div className="p-6 sm:ml-64 h-screen"> */}
      <div className="p-6 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 my-auto">
        <div className="flex">
          <div className="mx-auto mt-14 text-center space-y-6">
            <div className="mx-auto p-6 bg-[#E6F0FF] h-fit w-fit rounded-full">
              <img src="/PNFIcon.svg" className="text-[#0568FD4D]" alt="" />
              {/* <Wand48Regular className="text-[#0568FD4D]" /> */}
            </div>
            {/* <div className=""> */}
            <p className="mx-auto w-[40%] text-[#697283] text-center">
              404: Page Not Found. It seems you've taken a wrong turn. The page
              you're looking for doesn't exist or has been moved. Let's get you
              back on track.
            </p>
            {/* </div> */}
            <a
              href="/dashboard"
              className="w-fit mx-auto rounded my-auto flex p-2 px-4 font-semibold bg-[#0568FD] text-white"
              type="button"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
