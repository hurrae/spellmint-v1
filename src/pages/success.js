import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { useEffect } from "react";

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      console.log("Succes Data log: ", data);
    }
  }, [data]);

  return <div>Success</div>;
};

export default Success;

const fetcher = (url) => axios.get(url).then((res) => res.data);
