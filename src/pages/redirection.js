import React from "react";
import { useState, useEffect, useRef } from "react";
import { getSession, useSession, signOut } from "next-auth/react";
import Router from "next/router";
import axios from "axios";

const redirect = () => {
  const { data: session } = useSession();
  const dataFetchedRef = useRef(false);

  const onSubmit = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data2 = {
      name: session.user.name,
      email: session.user.email,
    };

    console.log("i have sent the order sucessfully");
    const { data } = await axios.post("/api/appusers/newUser", data2, config);

    Router.push({
      pathname: "/dashboard",
    });

    console.log("i am here", data);
  };

  useEffect(() => {
    console.log("i am here in the axios");
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    onSubmit();
  }, []);

  return <div>Please Wait, while we redirect you </div>;
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default redirect;
