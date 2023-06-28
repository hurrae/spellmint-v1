import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import { CheckmarkCircle16Filled } from "@fluentui/react-icons";
import { useState } from "react";
import { useRef } from "react";
import { resetPassValidate } from "../../lib/validate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const profile = ({ session, userData, appuserData }) => {
  const { expand } = useContext(StateContext);
  //   console.log("In Profile Page User Data: ", userData.data);
  const [load, setload] = useState(false);
  console.log("In Profile Page App user data: ", userData);
  const formik = useFormik({
    initialValues: {
      email: session.user.email,
      fullname: session.user.name,
      newPass: "",
      confirmNewPass: "",
    },
    validate: resetPassValidate,
    onSubmit,
  });

  console.log("Session: ", session);

  function onSubmit(values) {
    console.log("Values Received: ", values);
    setload(true);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/reset/passSetSign`,
      data: {
        email: session.user.email,
        newPass: values.newPass,
      },
    })
      .then(function (res) {
        console.log(res, "New Password Set");
        toast.success("New password set successfully");
        setload(false);
      })
      .catch((err) => {
        console.log("Error in profile password change", err);
        toast.error("Unable to change password");
        setload(false);
      });
  }
  //   const inputRef = useRef(null);

  //   const [image, setimage] = useState("");
  //   const handleImageChange = (e) => {
  //     console.log(e.target.files[0], URL.createObjectURL(e.target.files[0]));
  //     setimage(e.target.files[0]);
  //   };

  //   const handleImageClick = () => {
  //     inputRef.current.click();
  //   };
  let cwc = 0;
  let awc = 2000;

  if (appuserData.consumedWords > 0) {
    cwc = appuserData.consumedWords;
  }
  if (appuserData.allottedWords > 0) {
    awc = appuserData.allottedWords;
  }

  return (
    <>
      <Head>
        <title>Profile | Spellmint</title>
        <meta
          name="description"
          content="Swap chaos for clarity with Spellmint, the AI that turns brainstorming into brilliance. Equip your teams with cutting-edge planning tools for decision-making so smooth, it'll feel like gliding on air!"
        />
      </Head>
      <div>
        <Navbar />
        <Sidebar />

        <div className={`p-4 ${expand ? "lg:ml-64" : "ml-20"} `}>
          <div className="lg:p-4 py-2 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div id="Settings" className=" mb-8 rounded rounded-lg border">
              <div className="p-6 lg:p-6 space-y-4">
                <h3 className="text-xl font-bold">Profile Settings</h3>
                {/* <div className="flex space-x-4">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      className="h-[100px] w-[100px] rounded rounded-full"
                      alt=""
                    />
                  ) : (
                    <img src="/logowname.svg" alt="" />
                  )}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={inputRef}
                  />
                  <button
                    type="button"
                    onClick={handleImageClick}
                    className="mr-3 h-fit my-auto px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                  >
                    Change Photo
                  </button>
                  <button
                    type="button"
                    className="my-auto h-fit text-[#CC3F4D]"
                  >
                    Remove Photo
                  </button>
                </div> */}
                {"emailVerified" in userData ? (
                  <div className="flex space-x-4">
                    <img
                      src={session.user.image}
                      className="h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded rounded-full"
                      alt=""
                    />
                    <button
                      type="button"
                      disabled
                      className="border border-2 rounded my-auto flex bg-[#F8F8FB] p-2 px-3 lg:px-5 h-fit"
                    >
                      <div className="my-auto mr-2">
                        <FcGoogle className="text-xl" />
                      </div>
                      Account Linked with Google
                    </button>
                  </div>
                ) : (
                  <img
                    src="/ProfileAvatar.svg"
                    className="h-[100px] w-[100px] rounded rounded-full"
                    alt=""
                  />
                )}

                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="lg:w-[65%] gap-4 grid grid-cols-2">
                    <div>
                      <label
                        htmlFor={"FullName"}
                        className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                      >
                        Full Name
                      </label>
                      <input
                        type={"text"}
                        disabled
                        id={"FullName"}
                        className="bg-gray-100 shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder={"Full Name"}
                        required={true}
                        {...formik.getFieldProps("fullname")}
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
                        className="bg-gray-100 shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder={"abcd@email.com"}
                        required={true}
                        {...formik.getFieldProps("email")}
                        disabled
                      />
                    </div>
                    {!("emailVerified" in userData) ? (
                      <>
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
                            {...formik.getFieldProps("newPass")}
                          />
                          <div className="text-start ml-2">
                            {formik.errors.newPass && formik.touched.newPass ? (
                              <span className="text-rose-500 text-sm text-left">
                                {formik.errors.newPass}
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
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
                            {...formik.getFieldProps("confirmNewPass")}
                          />
                          <div className="text-start ml-2">
                            {formik.errors.confirmNewPass &&
                            formik.touched.confirmNewPass ? (
                              <span className="text-rose-500 text-sm text-left">
                                {formik.errors.confirmNewPass}
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  {!("emailVerified" in userData) ? (
                    <button
                      type="submit"
                      className={`${
                        load ? "bg-[#82b3fe]" : "bg-[#7371EE]"
                      } w-fit mt-4 mx-auto rounded my-auto p-2 px-5 text-white`}
                    >
                      Save Changes
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-fit mt-4 mx-auto rounded my-auto p-2 px-5  bg-[#9b9af1] text-white"
                    >
                      Disconnect Google
                    </button>
                  )}
                </form>
              </div>
            </div>
            {/* <div id="CreditsUsage" className="h-[60px]"></div> */}
            <section id="CreditsUsage">
              <div className=" mb-8 rounded rounded-lg border">
                <div className="p-6 bg-[url('/CurvesPattern.svg')] bg-no-repeat bg-right space-y-4">
                  <h3 className="text-xl font-bold">Credits Usage</h3>
                  <div>
                    <p>
                      You’re currently on{" "}
                      <span className="text-[#7371EE] underline underline-offset-2">
                        {appuserData.plan ? appuserData.plan : "Free"} Plan
                      </span>{" "}
                      <span>
                        <CheckmarkCircle16Filled className="text-[#7371EE] mb-[2px]" />
                      </span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl text-[#697283]">
                      <span className="font-bold text-[#111829]">{cwc}</span> /{" "}
                      {awc} words
                    </h2>
                    <div className="w-[300px] lg:w-[400px] bg-gray-200 rounded-full h-2 mb-8 dark:bg-gray-700">
                      <div
                        className="bg-[#7371EE] h-2 rounded-full dark:bg-blue-500"
                        style={{ width: `${(cwc / awc) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    {appuserData.plan &&
                    (appuserData.plan == "Basic" ||
                      appuserData.plan == "Pro") ? (
                      <a
                        target="_blank"
                        href="https://billing.stripe.com/p/login/6oE4id9RdeHV1EI3cc"
                        className=" px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                      >
                        Manage Plan
                      </a>
                    ) : (
                      <Link href="/profile/#pricing">
                        {" "}
                        <button
                          type="button"
                          className=" px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                        >
                          Upgrade Plan
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {/* <div className="h-[60px]"></div> */}
            <section id="pricing">
              <div className=" mb-8 rounded rounded-lg border">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Plans & Pricing</h3>
                  <PricingPage />
                </div>
              </div>
            </section>
            {/* <div className="h-[60px]"></div> */}
          </div>
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

export default profile;

function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    // <stripe-pricing-table
    //   pricing-table-id="prctbl_1NJKbySJu3RZdCRnAMCxL81R"
    //   publishable-key="pk_live_51NJHfWSJu3RZdCRnFpBRW2FzC74yFwwBr9D1n2a42bXbwsbur0qQCHePCKyOZ0ZUmlapUcKXjwYYXTfudfYUv8pw00DEN3Gsct"
    // ></stripe-pricing-table>
    <stripe-pricing-table
      pricing-table-id="prctbl_1NKv5rSJu3RZdCRngTTFRFrM"
      publishable-key="pk_live_51NJHfWSJu3RZdCRnFpBRW2FzC74yFwwBr9D1n2a42bXbwsbur0qQCHePCKyOZ0ZUmlapUcKXjwYYXTfudfYUv8pw00DEN3Gsct"
    ></stripe-pricing-table>
    // <stripe-pricing-table
    //   pricing-table-id="prctbl_1NKcfwSJu3RZdCRnkYy3SszP"
    //   publishable-key="pk_test_51NJHfWSJu3RZdCRn7GnQSBvzaNB8VocA7dJ7Xwb0iLj27f05KLfYn2Nd5mkA7vOeF0eYfL9Krgn3FFiw6Cp8vFy100ufDRuTJn"
    // ></stripe-pricing-table>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_HOST}/api/getUser`,
    data: {
      email: session.user.email,
    },
  });
  console.log("response: ", res);
  const userData = res.data.user;
  const appuserData = res.data.appuser;

  return {
    props: { session, userData, appuserData },
  };
}
