import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const DeleteProjectModal = ({ toDelete, session }) => {
  console.log(toDelete);
  const [load, setload] = useState(false);
  const router = useRouter();
  // console.log("router: ", router);

  function handleDelete() {
    setload(true);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/projects/deleteProject`,
      data: {
        user_email: session.user.email,
        project_id: toDelete.id,
      },
    })
      .then(function (res) {
        toast.success(
          <div>
            {" "}
            Project <strong>{toDelete.name}</strong> Deleted{" "}
          </div>
        );
        setTimeout(() => {
          window.location.href = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;
        }, 3000);
        console.log("Delete Project Modal, Response: ", res);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("this is delete project error", err);
        toast.error(
          <div>
            {" "}
            Project <strong>{toDelete.name}</strong> doesn't exist{" "}
          </div>
        );
      });
  }

  return (
    <div
      id="project-delete-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="bg-gray-50 flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
            <div className="">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Delete a Project
              </h3>
              <p className="text-[#697283] text-base">
                Remove any project from your workspace that's no longer needed.
              </p>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="project-delete-modal"
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
          <div className="p-6 space-y-3">
            <div className="text-[#697283] space-y-4 mb-3">
              <p>
                Are you sure you want to delete{" "}
                <span className="font-bold">{toDelete.name}?</span> and its
                contents? Any credit usage in progress will not be refunded.
              </p>
              <p>Note: You can’t undo this action.</p>
            </div>
            <button
              type="button"
              data-modal-hide="project-delete-modal"
              className="w-full border border-2 text-black bg-gray-100  focus:ring-4 focus:outline-none focus:ring-[#7371EE] font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className={`w-full text-white ${
                load ? "bg-[#ec8791]" : "bg-[#CC3F4D]"
              } focus:ring-4 focus:outline-none focus:ring-[#7371EE] font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Delete Project
            </button>
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

export default DeleteProjectModal;
