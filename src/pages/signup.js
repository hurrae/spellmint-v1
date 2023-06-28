import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { registerValidate } from "../../lib/validate";
import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signup = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/auth/signup`,
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    })
      .then(function (res) {
        console.log(res, "new user");
        if (res.status == 201)
          router.push(`${process.env.NEXT_PUBLIC_HOST}/login`);
      })
      .catch((err) => {
        console.log("Error in sign up: ", err);
        if (err.response.status == 422) {
          toast.error(
            "Account with that email already exists. Please Sign In."
          );
        }
      });
  }

  async function handleGoogleSignin() {
    signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/redirection`,
    });
  }

  return (
    <>
      <Head>
        <title>Sign Up | Spellmint</title>
        <meta
          name="description"
          content="Swap chaos for clarity with Spellmint, the AI that turns brainstorming into brilliance. Equip your teams with cutting-edge planning tools for decision-making so smooth, it'll feel like gliding on air!"
        />
      </Head>
      <div className="font-inter">
        <div className="flex h-full">
          <div className="w-[100%] lg:w-[40%] py-8  flex flex-col my-auto">
            <section className=" w-[80%] mx-auto flex flex-col gap-10">
              <div className="title space-y-4">
                <img src="/logowname.svg" className="" alt="" />
                <h3 className="text-[#111829] pt-3 font-bold text-[28px]">
                  Create your Spellmint account
                </h3>
                <p className="w-full text-xl text-gray-400">
                  Let's get started! Fill in the form below to create your free
                  Spellmint account.
                </p>
              </div>

              {/* form */}
              <form
                className="flex flex-col gap-5"
                onSubmit={formik.handleSubmit}
              >
                <div className="input-button">
                  <button
                    type="button"
                    onClick={handleGoogleSignin}
                    className={styles.button_custom}
                  >
                    <div className="my-auto mr-2">
                      <FcGoogle className="text-xl" />
                    </div>
                    Continue with Google
                  </button>
                </div>
                <hr className="my-2" />

                <div className="space-y-1">
                  <p className="text-left ml-2 text-[#111829">Full Name</p>
                  <div
                    className={`${styles.input_group} ${
                      formik.errors.name && formik.touched.name
                        ? "border-rose-600"
                        : ""
                    }`}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className={styles.input_text}
                      {...formik.getFieldProps("name")}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-left ml-2 text-[#111829">Email Address</p>
                  <div
                    className={`${styles.input_group} ${
                      formik.errors.email && formik.touched.email
                        ? "border-rose-600"
                        : ""
                    }`}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      className={styles.input_text}
                      {...formik.getFieldProps("email")}
                    />
                  </div>
                  <div className="text-start ml-2">
                    {formik.errors.email && formik.touched.email ? (
                      <span className="text-rose-500 text-sm text-left">
                        {formik.errors.email}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-left ml-2 text-[#111829">Password</p>
                  <div
                    className={`${styles.input_group} ${
                      formik.errors.password && formik.touched.password
                        ? "border-rose-600"
                        : ""
                    }`}
                  >
                    <input
                      type="password"
                      name="password"
                      placeholder="Must be alteast 8 characters"
                      className={styles.input_text}
                      {...formik.getFieldProps("password")}
                    />
                    {/* <span
                  className="icon flex items-center px-4"
                  onClick={() => setShow(!show)}
                >
                  <HiFingerPrint size={25} />
                </span> */}
                  </div>
                  <div className="text-start ml-2">
                    {formik.errors.password && formik.touched.password ? (
                      <span className="text-rose-500 text-sm text-left">
                        {formik.errors.password}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="ml-2 flex justify-between">
                  {/* checkbox */}
                  <div className="flex space-x-2">
                    <input type="checkbox" required />
                    <p>
                      By signing up, I agree to the{" "}
                      <Link href={"/"}>
                        <span className="text-blshade underline underline-offset-2">
                          terms & conditions
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>

                {/* login buttons */}
                <div className="input-button">
                  <button type="submit" className={styles.button}>
                    Sign Up
                  </button>
                </div>
              </form>

              {/* bottom */}
              <p className="text-gray-400 ">
                Already have an account?{" "}
                <Link href={"/login"}>
                  <span className="text-[#7371EE] underline underline-offset-2">
                    Sign In
                  </span>
                </Link>
              </p>
            </section>
          </div>
          <div className="hidden lg:block w-[60%] flex bg-[url('https://i.imgur.com/C1N7oXZ.png')] bg-no-repeat bg-cover bg-center"></div>
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

export default signup;
