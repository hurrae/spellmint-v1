import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { resetPassValidate } from "../../lib/validate";

const ResetSection = ({ resetToken }) => {
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      newPass: "",
      confirmNewPass: "",
    },
    validate: resetPassValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log("new Pass: ", values.newPass);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/reset/passSet`,
      data: {
        token: resetToken,
        newPass: values.newPass,
      },
    }).then(function (res) {
      console.log(res, "New Password Set");
      if (res.status == 200)
        router.push(`${process.env.NEXT_PUBLIC_HOST}/login`);
    });
  }

  return (
    <section className=" w-[80%] mx-auto flex flex-col gap-9">
      <div className="title space-y-4">
        <img src="/logowname.svg" className="" alt="" />
        <h3 className="text-[#111829] pt-3 font-bold text-[28px]">
          Reset your password
        </h3>
        <p className="w-[100%]  text-xl text-gray-400">
          Please enter a new password below to reset your Spellmint account
          password.
        </p>
      </div>

      {/* form */}
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className="space-y-1">
          <p className="text-left ml-2 text-[#111829">New Password</p>
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="password"
              name="newPass"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("newPass")}
            />
          </div>
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

        <div className="space-y-1">
          <p className="text-left ml-2 text-[#111829">Confirm New Password</p>
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="password"
              name="confirmNewPass"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("confirmNewPass")}
            />
          </div>
          <div className="text-start ml-2">
            {formik.errors.confirmNewPass && formik.touched.confirmNewPass ? (
              <span className="text-rose-500 text-sm text-left">
                {formik.errors.confirmNewPass}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* login buttons */}
        <div className="input-button">
          <button type="submit" className={styles.button}>
            Reset Password
          </button>
        </div>
      </form>

      {/* bottom */}
      <p className="text-[16px] ">
        Need help in resetting your password? Get in touch at{" "}
        <Link href={"mailto:support@spellmint.com"}>
          <span className="text-[#7371EE] underline underline-offset-2">
            support@spellmint.com
          </span>
        </Link>
      </p>
    </section>
  );
};

export default ResetSection;
