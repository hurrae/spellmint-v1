import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import copy from "copy-to-clipboard";

const ShareSpellModal = ({ spellData }) => {
  const [load, setload] = useState(false);
  //   const [copyLink, setcopyLink] = useState("");

  function handleCopy() {
    setload(true);
    copy(`${process.env.NEXT_PUBLIC_HOST}/spells/` + spellData.share_code);
    setTimeout(() => {
      toast.success("Link copied to clipboard");
      setload(false);
    }, 250);
  }

  return (
    <div
      id="spell-share-modal"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="bg-gray-50 flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
            <div className="">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Copy Link to the Document
              </h3>
              <p className="text-gray-500 text-base">
                Copy shareable link to your document, making collaboration
                seamless and instant.
              </p>
            </div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="spell-share-modal"
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
            <div className="space-y-4 mb-3 text-[#697283]">
              <input
                disabled
                className="w-full"
                type="text"
                value={
                  `${process.env.NEXT_PUBLIC_HOST}/spells/` +
                  spellData.share_code
                }
              />
            </div>
            {/* <button
              onClick={handleDelete}
              type="button"
              data-modal-hide="spell-delete-modal"
              class="w-full border border-2 text-black bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button> */}
            <button
              onClick={handleCopy}
              type="button"
              class={`w-full text-white ${
                load ? "bg-blue-400" : "bg-[#0568FD]"
              } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Copy Link
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

export default ShareSpellModal;
