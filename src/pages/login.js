import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate: login_validate,
    // onSubmit,
  });

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  }

  return (
    <div className="font-cabinet h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
        <div className="col-span-1 lg:col-span-2">
          <h3>Hello World</h3>
        </div>
        <div className="col-span-1 py-8 flex flex-col my-auto">
          <section className=" text-center w-[80%] mx-auto flex flex-col gap-10">
            <div className="title space-y-4">
              <h1 className="text-gray-800 text-4xl font-bold py-4">
                Spellmint
              </h1>
              <h3 className="text-[#111829] font-bold text-xl">
                Welcome back to Spellmint
              </h3>
              <p className="w-3/4 mx-auto text-gray-400">
                Sign in to your account below.
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
                  {/* <Image
                    src={"/assets/google.svg"}
                    width="20"
                    height={20}
                  ></Image> */}
                </button>
              </div>
              <hr className="my-2" />
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
                    placeholder="Email"
                    className={styles.input_text}
                    {...formik.getFieldProps("email")}
                  />
                </div>
              </div>
              {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

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
                    placeholder="Password"
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
              </div>

              <div className="flex justify-between">
                {/* checkbox */}
                <div className="flex space-x-2">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <div>
                  <Link href={"/"}>
                    <span className="text-[#8046FD] underline underline-offset-2">
                      Forgot password?
                    </span>
                  </Link>
                </div>
              </div>

              {/* login buttons */}
              <div className="input-button">
                <button type="submit" className={styles.button}>
                  Sign In
                </button>
              </div>
            </form>

            {/* bottom */}
            <p className="text-center text-gray-400 ">
              Don't have an account?{" "}
              <Link href={"/register"}>
                <span className="text-blue-700 underline underline-offset-2">
                  Sign Up
                </span>
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default login;
