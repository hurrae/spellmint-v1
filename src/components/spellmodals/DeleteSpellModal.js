import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const DeleteSpellModal = ({ toDelete, session, page }) => {
  console.log(toDelete);
  const [load, setload] = useState(false);
  const router = useRouter();
  // console.log("router: ", router);

  function handleDelete() {
    setload(true);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/deleteSpell`,
      data: {
        spell_id: toDelete.id,
        user_email: session.user.email,
      },
    })
      .then(function (res) {
        toast.success(
          <div>
            {" "}
            Spell <strong>{toDelete.name}</strong> Deleted{" "}
          </div>
        );
        setTimeout(() => {
          if (page == "project") {
            window.location.href = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;
          } else {
            function modPath(path) {
              const lastSlashIndex = path.lastIndexOf("/");
              if (lastSlashIndex !== -1) {
                return path.substring(0, lastSlashIndex);
              }
              return path;
            }

            const newPath = modPath(router.asPath);
            window.location.href = `${process.env.NEXT_PUBLIC_HOST}${newPath}`;
          }
        }, 3000);
        console.log("Delete Spell Modal, Response: ", res);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("this is delete spell error", err);
        toast.error(
          <div>
            {" "}
            Spell <strong>{toDelete.name}</strong> doesn't exist{" "}
          </div>
        );
      });
  }

  return (
    <div
      id="spell-delete-modal"
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
                Remove any spell from your project that's no longer needed.
              </p>
            </div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="spell-delete-modal"
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
              <p>
                Are you sure you want to delete{" "}
                <span className="font-bold">{toDelete.name}?</span> and its
                contents? Any credit usage in progress will not be refunded.
              </p>
              <p>Note: You can’t undo this action.</p>
            </div>
            <button
              onClick={handleDelete}
              type="button"
              data-modal-hide="spell-delete-modal"
              class="w-full border border-2 text-black bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              type="button"
              class={`w-full text-white ${
                load ? "bg-[#ec8791]" : "bg-[#CC3F4D]"
              } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Delete Spell
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

export default DeleteSpellModal;
