import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SpellTable from "@/components/SpellTable";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import {
  ChevronRight20Filled,
  Wand48Regular,
  ArrowLeft24Regular,
  Delete24Regular,
  Link24Regular,
} from "@fluentui/react-icons";
import CreateSpellModal from "@/components/CreateSpellModal";
import Editor from "@/components/Editor";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

const SpellDashboard = () => {
  const { expand } = useContext(StateContext);
  const table = [1, 2];
  const router = useRouter();
  const [initText, setinitText] = useState("hello");
  //   const table = [];

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Sidebar />

        <div class={` p-6 pb-0 pl-0 ${expand ? "ml-64" : "ml-20"} `}>
          {/* <div class="p-6 sm:ml-64 h-screen"> */}
          <div class="p-6 pl-0 pt-4 pb-0 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className="flex justify-between">
              <div className="ml-4 flex space-x-3">
                <span
                  onClick={() => router.back()}
                  className="cursor-pointer my-auto"
                >
                  <ArrowLeft24Regular />
                </span>
                <h2 className="text-xl my-auto">ChatApp - PRD |</h2>
                {/* <span className="my-auto">
                <ChevronRight20Filled />
              </span>
              <h2 className="text-xl font-bold my-auto">ChatApp Spell</h2>
              <span className="h-fit my-auto font-medium text-sm border-2 rounded bg-gray-100 px-2 rounded text-[#697283]">
                Software Product
              </span> */}
              </div>

              <div>
                <button className="mr-3 p-1 bg-[#0568FD] rounded text-white">
                  <Link24Regular />
                </button>
                <button
                  data-modal-target="delete-modal"
                  data-modal-toggle="delete-modal"
                  type="button"
                  className="mr-3 p-1 bg-[#EA4335] rounded text-white"
                >
                  <Delete24Regular />
                </button>
                <button
                  href="#"
                  class="mr-3 px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                >
                  Download as DOC
                </button>
                <button
                  href="#"
                  class="mr-3 px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                >
                  Download as PDF
                </button>
              </div>
            </div>

            <div className="w-full flex mb-4 justify-between">
              <div className="w-1/3">
                <div className="border flex space-x-3 w-full p-5 px-6 bg-[#F8F8FB]">
                  <h2 className="text-xl font-bold my-auto">ChatApp</h2>
                  <span className="h-fit my-auto font-medium text-sm border-2 rounded bg-[#FFFFFF] px-2 rounded text-[#697283]">
                    Software Product
                  </span>
                </div>
                <SpellForm setinitText={setinitText} />
              </div>
              <div className="w-2/3">
                <Editor initText={initText} setinitText={setinitText} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteSpellModal />
    </>
  );
};

export default SpellDashboard;

const SpellForm = ({ setinitText }) => {
  const [load, setload] = useState(false);
  const onSubmit = (values) => {
    setload(true);
    console.log(values);
    setinitText("response got<p><br></p><p><br></p>Hello World");

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/prompts/test2`,
      data: {
        PurposeAndScope: values.PurposeAndScope,
        ProductDescription: values.ProductDescription,
        KeyUsers: values.KeyUsers,
        UserActions: values.UserActions,
      },
    })
      .then(function (res) {
        console.log("Api Response: ", res);
        const data = res.data.prd;
        let defStr = "";
        data.forEach((el) => {
          // console.log("element text: ", el.text);
          defStr += el.text;
          // defStr += el.text.replace("/\n/g", "<br>");
          defStr += "<p><br></p>";
        });
        // console.log("defStr 1: ", defStr);
        defStr.replace(/\n/g, "<p><br></p>");
        console.log("defStr 2: ", defStr);
        setinitText(defStr);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("Error Occured: ", err);
      });
  };

  const formik = useFormik({
    initialValues: {
      PurposeAndScope: "",
      ProductDescription: "",
      KeyUsers: "",
      UserActions: "",
    },
    onSubmit,
  });

  return (
    <form action="#" onSubmit={formik.handleSubmit}>
      <div>
        <div className="h-[62vh] overflow-y-scroll py-8 px-6 mx-auto max-w-screen-md">
          <div className="space-y-4 text-base">
            <div>
              <label
                for="PurposeAndScope"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Purpose and Scope
              </label>
              <textarea
                type="text"
                id="PurposeAndScope"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="To build a reliable ride-hailing app"
                required
                {...formik.getFieldProps("PurposeAndScope")}
              />
            </div>
            <div>
              <label
                for="ProductDescription"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Product Description
              </label>
              <textarea
                type="text"
                id="ProductDescription"
                rows="2"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="An app connecting drivers and passengers for efficient city travel"
                required
                {...formik.getFieldProps("ProductDescription")}
              />
            </div>
            <div>
              <label
                for="KeyUsers"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Key Users
              </label>
              <textarea
                type="text"
                id="KeyUsers"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Commuters, Tourists, Drivers"
                required
                {...formik.getFieldProps("KeyUsers")}
              />
            </div>

            <div>
              <label
                for="UserActions"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                User Actions
              </label>
              <textarea
                type="text"
                id="UserActions"
                rows="2"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Request ride, Accept ride, Navigate to destination"
                required
                {...formik.getFieldProps("UserActions")}
              />
            </div>

            <div>
              <label
                for="targetmarket"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Target Market
              </label>
              <textarea
                type="text"
                id="targetmarket"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Small businesses in the retail sector"
              />
            </div>

            <div>
              <label
                for="targetmarket"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Target Market
              </label>
              <textarea
                type="text"
                id="targetmarket"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Small businesses in the retail sector"
              />
            </div>
          </div>
        </div>
        <div className="py-4 px-6 border bg-[#F8F8FB]">
          <button
            type="submit"
            className={`flex justify-center w-full rounded my-auto flex p-2 px-4  ${
              !load ? "bg-[#0568FD]" : "bg-[#789bcf]"
            } text-white`}
            disabled={load}
          >
            <span>Mint the Spell</span>
            <img src="/Sparkles.svg" className="my-auto ml-1" alt="" />
          </button>
        </div>
      </div>
    </form>
  );
};

const DeleteSpellModal = () => {
  return (
    <div
      id="delete-modal"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="bg-gray-50 flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
            <div className="">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Delete a Spell
              </h3>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="delete-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div class="p-6 space-y-3">
            <div className="space-y-4 mb-3">
              <p>
                Are you sure you want to delete{" "}
                <span className="font-bold">ChatApp - PRD?</span> and its
                contents? Any credit usage in progress will not be refunded.
              </p>
              <p>Note: You can’t undo this action.</p>
            </div>
            <button
              type="button"
              data-modal-hide="delete-modal"
              class="w-full text-black bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
            <button
              type="button"
              class="w-full text-white bg-[#CC3F4D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete Spell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
