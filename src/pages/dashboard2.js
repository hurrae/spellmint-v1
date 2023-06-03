import React from "react";
import { Sidebar } from "flowbite-react";
import Head from "next/head";

const dashboard2 = () => {
  return (
    <>
      <button
        data-modal-target="large-modal"
        data-modal-toggle="large-modal"
        class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Large modal
      </button>
      <div
        id="large-modal"
        tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-4xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="bg-gray-50 flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
              <div className="">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                  Create a Project
                </h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus libero dolor.
                </p>
              </div>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="large-modal"
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
            <div class="p-6 space-y-6">
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectname"
                    id="projectname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Eg: ChatApp"
                    required
                  />
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option>Choose Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                  </select>
                </div>
                <div>
                  <label
                    for="desc"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    type="text"
                    name="desc"
                    id="desc"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Eg: ChatApp is a messaging and communication platform that allows users to send text messages, voice messages, photos, videos, and other media files to their friends, family, and colleagues. "
                    style={{
                      height: "auto",
                    }}
                    required
                  />
                </div>
                <hr />
                <div className="space-y-3">
                  <h2 className="font-bold text-lg">Activate Spells</h2>
                  <div className="grid grid-cols-4 gap-4">
                    <div class="flex items-center px-4 border-2 border-gray-300 rounded dark:border-gray-700">
                      <label
                        for="bordered-checkbox-1"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Product
                      </label>
                      <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value="product"
                        name="bordered-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div class="flex items-center px-4 border-2 border-gray-300 rounded dark:border-gray-700">
                      <label
                        for="bordered-checkbox-2"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Marketing
                      </label>
                      <input
                        id="bordered-checkbox-2"
                        type="checkbox"
                        value="marketing"
                        name="bordered-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div class="flex items-center px-4 border-2 border-gray-300 rounded dark:border-gray-700">
                      <label
                        for="bordered-checkbox-3"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Design
                      </label>
                      <input
                        id="bordered-checkbox-3"
                        type="checkbox"
                        value="product"
                        name="bordered-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard2;
