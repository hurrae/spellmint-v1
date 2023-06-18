import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginComponent = ({ forgotBool, toast }) => {
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/redirection",
    });
    console.log("status: ", status);

    if (status.error == "Illegal arguments: string, undefined") {
      toast.error("Please sign in with Google");
    } else {
      toast.error(status.error);
    }

    if (status.ok) router.push(status.url);
  }

  async function handleGoogleSignin() {
    signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/redirection`,
    });
  }

  return (
    <section className=" w-[80%] mx-auto flex flex-col gap-10">
      <div className="title mt-2 space-y-3">
        <img src="/logowname.svg" className="w-[50%]" alt="" />
        <h3 className="text-[#111829] pt-3 font-bold text-[28px]">
          Welcome back to Spellmint
        </h3>
        <p className="w-3/4 text-xl text-gray-400">
          Sign in to your account below.
        </p>
      </div>

      {/* form */}
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
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
              placeholder="example@email.com"
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
        </div>

        <div className="flex justify-between">
          {/* checkbox */}
          <div className="flex space-x-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div>
            <div className="cursor-pointer" onClick={forgotBool}>
              <span className="text-blshade underline underline-offset-2">
                Forgot password?
              </span>
            </div>
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
      <p className=" text-gray-400 ">
        Don't have an account?{" "}
        <Link href={"/signup"}>
          <span className="text-blue-700 underline underline-offset-2">
            Sign Up
          </span>
        </Link>
      </p>
    </section>
  );
};

export default LoginComponent;
