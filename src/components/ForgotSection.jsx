import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import axios from "axios";
import { set } from "mongoose";

const ForgotSection = () => {
  const [forgetSubmit, setforgetSubmit] = useState(false);

  return !forgetSubmit ? (
    <BeforeSubmit
      setforgetSubmit={() => {
        setforgetSubmit(!forgetSubmit);
      }}
    />
  ) : (
    <AfterSubmit />
  );
};

export default ForgotSection;

const BeforeSubmit = ({ setforgetSubmit }) => {
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    // validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/resetSend`,
      data: {
        email: values.email,
      },
    }).then(function (res) {
      console.log(res, "Forget Email send response");
      if (res.status == 201 && res.data.status == "OK") setforgetSubmit();
    });
  }

  return (
    <section className=" text-center w-[80%] mx-auto flex flex-col gap-9">
      <div className="title space-y-4">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Spellmint</h1>
        <h3 className="text-[#111829] font-bold text-xl">
          Reset your password
        </h3>
        <p className="w-[85%] mx-auto text-gray-400">
          Please enter your email address below to reset your Spellmint
          password.
        </p>
      </div>

      {/* form */}
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className="space-y-1">
          <p className="text-left ml-2 text-[#111829]">Email Address</p>
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

        {/* login buttons */}
        <div className="input-button">
          <button type="submit" className={styles.button}>
            Reset Password
          </button>
        </div>
      </form>

      {/* bottom */}
      <p className="text-center ">
        Need help in resetting your password? Get in touch at{" "}
        <Link href={"mailto:support@spellmint.com"}>
          <span className="text-blue-700 underline underline-offset-2">
            support@spellmint.com
          </span>
        </Link>
      </p>
    </section>
  );
};

const AfterSubmit = () => {
  return (
    <section className=" text-center w-[80%] mx-auto flex flex-col gap-9">
      <div className="title space-y-8">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Spellmint</h1>
        <h3 className="text-[#111829] font-bold text-xl">
          Reset your password
        </h3>
        <p className="w-[85%] mx-auto text-gray-400">
          We've sent a password reset link to your email address. Please follow
          the instructions in the email to reset your password.
        </p>
      </div>

      {/* bottom */}
      <p className="text-center mt-4">
        Need help in resetting your password? Get in touch at{" "}
        <Link href={"/signup"}>
          <span className="text-blue-700 underline underline-offset-2">
            support@spellmint.com
          </span>
        </Link>
      </p>
    </section>
  );
};
