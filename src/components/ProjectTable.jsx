import React from "react";

const ProjectTable = () => {
  return (
    <>
      <div class=" overflow-x-auto  sm:rounded-lg">
        <table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
          <thead class="text-base text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                PROJECT NAME
              </th>
              <th scope="col" class="px-6 py-3">
                CREATED ON
              </th>
              <th scope="col" class="px-6 py-3">
                LAST EDITED ON
              </th>
              <th scope="col" class="px-6 py-3">
                CREATED BY
              </th>
              <th scope="col" class="px-6 py-3">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <TableRow ind={0} />
            <TableRow ind={1} />
            <TableRow ind={0} />
            <TableRow ind={1} />
          </tbody>
        </table>
      </div>
      <DeleteProjectModal />
    </>
  );
};

export default ProjectTable;

const TableRow = ({ ind }) => {
  //   console.log("Log: ", ind);
  return (
    <tr
      class={` border-b ${
        ind % 2 == 1 ? "bg-gray-50" : "bg-white"
      }  dark:bg-gray-900 dark:border-gray-700`}
    >
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Spellmint
      </th>
      <td class="px-6 py-4">April 24, 2023</td>
      <td class="px-6 py-4">30 minutes ago</td>
      <td class="px-6 py-4 font-medium text-gray-900">Manoj Maheshwar</td>
      <td class="px-6 py-4">
        <span className="font-medium bg-[#DDEBFF] p-1 px-2 rounded text-blue-600">
          Software Product
        </span>
      </td>
      <td>
        <button
          id="dropdownMenuIconButton"
          // data-dropdown-toggle="dropdownDots"
          aria-expanded="false"
          data-dropdown-toggle="dropdown-menu"
          class="inline-flex items-center p-2 text-base font-medium text-center text-grshade  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          class="z-30 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown-menu"
        >
          <ul class="py-1" role="none">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Rename
              </a>
            </li>
            <li>
              <button
                data-modal-target="delete-modal"
                data-modal-toggle="delete-modal"
                class="block w-full py-2  text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

const DeleteProjectModal = () => {
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
                Delete a Project
              </h3>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus libero dolor.
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
                <span className="font-bold">Crushvest?</span> and its contents?
                Any credit usage in progress will not be refunded.
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
              Delete Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
