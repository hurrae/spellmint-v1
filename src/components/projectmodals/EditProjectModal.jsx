import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const EditProjectModal = ({ projData, session }) => {
  const [load, setload] = useState(false);
  // console.log("Project Data in Edit Project Modal: ", projData);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: projData.name,
      category: projData.category,
      description: projData.description,
    },
    // validate,
    onSubmit,
  });

  function onSubmit(values) {
    console.log("Edit Project values: ", values);
    setload(true);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/projects/editProject`,
      data: {
        projectId: projData._id,
        newName: values.name,
        newDescription: values.description,
        user_email: session.user.email,
      },
    })
      .then(function (res) {
        toast.success(
          <div>
            {" "}
            Project <strong>{values.name}</strong> Updated{" "}
          </div>
        );

        // router.push("/projects/chatapp");
        setTimeout(() => {
          window.location.href = `${process.env.NEXT_PUBLIC_HOST}/projects/${values.name}`;
          // router.push('/path-to-redirect');
        }, 3000);
        console.log("Edit Project Modal, Response: ", res);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("this is edit project error", err);
        toast.error(
          <div>
            {" "}
            Project <strong>{values.name}</strong> already exists{" "}
          </div>
        );
        // if (err.response.status == 400) {
        //   toast.error("This Transaction Id is already used.");
        //   // setexistingId(true);
        // } else if (err.response.status == 403) {
        //   toast.error("Submit transaction id again in few minutes");
        // }
      });
  }
  return (
    <div
      id="edit-project-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative mt-10 w-full max-w-3xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="bg-gray-50 flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
            <div className="">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Edit a Project
              </h3>
              <p className="text-gray-500">
                Update and modify your project details as per your evolving
                requirements.
              </p>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="edit-project-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectname"
                  id="projectname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Eg: ChatApp"
                  required
                  {...formik.getFieldProps("name")}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project Category
                </label>
                <select
                  name="category"
                  id="category"
                  disabled
                  required
                  {...formik.getFieldProps("category")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                >
                  <option>Choose Category</option>
                  <option>Software Product</option>
                  <option>Digital Agency</option>
                  <option>Education</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Retail</option>
                  <option>E-Commerce</option>
                  <option>Media & Entertainment</option>
                  <option>Hospitality</option>
                  <option>Legal Services</option>
                  <option>Insurance</option>
                  <option>Sports & Fitness</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project Description
                </label>
                <textarea
                  type="text"
                  name="desc"
                  id="desc"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Eg: ChatApp is a messaging and communication platform that allows users to send text messages, voice messages, photos, videos, and other media files to their friends, family, and colleagues. "
                  style={{
                    height: "auto",
                  }}
                  required
                  {...formik.getFieldProps("description")}
                />
              </div>
              <hr />
              {/* <div className="space-y-3">
                <h2 className="font-bold text-lg">Activate Spells</h2>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex items-center px-4 border-2 border-gray-300 rounded dark:border-gray-700">
                    <label
                      htmlFor="bordered-checkbox-1"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Product
                    </label>
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="product"
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex items-center px-4 border-2 border-gray-300 rounded dark:border-gray-700">
                    <label
                      htmlFor="bordered-checkbox-2"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Marketing
                    </label>
                    <input
                      id="bordered-checkbox-2"
                      type="checkbox"
                      value="marketing"
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex items-center px-4 border-2 border-gray-300 rounded dark:border-gray-700">
                    <label
                      htmlFor="bordered-checkbox-3"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Design
                    </label>
                    <input
                      id="bordered-checkbox-3"
                      type="checkbox"
                      value="product"
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              </div> */}
              <button
                type="submit"
                disabled={load}
                className={`w-full text-white ${
                  !load ? "bg-[#7371EE] hover:bg-[#6462e1]" : "bg-[#9b9af1]"
                } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        className="font-medium"
      />
    </div>
  );
};

export default EditProjectModal;
