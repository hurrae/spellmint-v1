import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import { CheckmarkCircle16Filled } from "@fluentui/react-icons";

const profile = () => {
  const { expand } = useContext(StateContext);
  const formik = useFormik({
    initialValues: {},
    onSubmit,
  });

  function onSubmit(values) {
    console.log("Values Received: ", values);
  }

  return (
    <>
      <Head>
        <title>Profile | Spellmint</title>
      </Head>
      <div>
        <Navbar />
        <Sidebar />

        <div className={`p-4 ${expand ? "ml-64" : "ml-20"} `}>
          <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className=" mb-4 rounded rounded-lg border">
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Profile Settings</h3>
                <div>
                  <button
                    type="button"
                    className="mr-3 px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                  >
                    Change Photo
                  </button>
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="w-[65%] gap-4 grid grid-cols-2">
                    <div>
                      <label
                        htmlFor={"FullName"}
                        className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        Full Name
                      </label>
                      <input
                        type={"text"}
                        id={"FullName"}
                        className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder={"Full Name"}
                        required={true}
                        {...formik.getFieldProps("FullName")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={"Email"}
                        className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <input
                        type={"email"}
                        id={"Email"}
                        className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder={"abcd@email.com"}
                        required={true}
                        {...formik.getFieldProps("Email")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={"NewPassword"}
                        className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        New Password
                      </label>
                      <input
                        type={"password"}
                        id={"NewPassword"}
                        className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder={"***************"}
                        required={true}
                        {...formik.getFieldProps("NewPassword")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={"ConfirmNewPassword"}
                        className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        Confirm New Password
                      </label>
                      <input
                        type={"password"}
                        id={"ConfirmNewPassword"}
                        className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder={"***************"}
                        required={true}
                        {...formik.getFieldProps("ConfirmNewPassword")}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-fit mt-4 mx-auto rounded my-auto p-1 px-5  bg-[#0568FD] text-white"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
            <div id="CreditsUsage" className=" mb-4 rounded rounded-lg border">
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Credits Usage</h3>
                <div>
                  <p>
                    You’re currently on{" "}
                    <span className="text-[#0568FD] underline underline-offset-2">
                      Free Plan
                    </span>{" "}
                    <span>
                      <CheckmarkCircle16Filled className="text-[#0568FD] mb-[2px]" />
                    </span>
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl text-[#697283]">
                    <span className="font-bold text-[#111829]">800</span> / 2000
                    words
                  </h2>
                  <div class="w-[400px] bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                    <div
                      class="bg-[#0568FD] h-2 rounded-full dark:bg-blue-500"
                      style={{ width: `${(800 / 2000) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    href="#"
                    className=" px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                  >
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
