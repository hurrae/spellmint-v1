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
} from "@fluentui/react-icons";
import CreateSpellModal from "@/components/CreateSpellModal";

const SpellDashboard = () => {
  const { expand } = useContext(StateContext);
  const table = [1, 2];
  //   const table = [];

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Sidebar />

        <div class={` p-6 pb-0 pl-0 ${expand ? "ml-64" : "ml-20"} `}>
          {/* <div class="p-6 sm:ml-64 h-screen"> */}
          <div class="p-6 pl-0 pt-4 pb-0 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className="ml-4 flex space-x-3">
              <span className="my-auto">
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

            <div className="w-full flex mb-4 justify-between">
              <div className="w-[33%]">
                <div className="flex space-x-3 w-full p-5 px-6 bg-[#F8F8FB]">
                  <h2 className="text-xl font-bold my-auto">ChatApp</h2>
                  <span className="h-fit my-auto font-medium text-sm border-2 rounded bg-[#FFFFFF] px-2 rounded text-[#697283]">
                    Software Product
                  </span>
                </div>
                <div>
                  <div className="h-[62vh] overflow-y-scroll py-8 px-6 mx-auto max-w-screen-md">
                    <form action="#" class="space-y-8 text-base">
                      <div>
                        <label
                          for="vision"
                          class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                        >
                          Product Vision
                        </label>
                        <textarea
                          type="text"
                          id="vision"
                          rows="2"
                          class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Our product will revolutionize the way businesses manage their inventory."
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="objectives"
                          class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                        >
                          Product Objectives
                        </label>
                        <textarea
                          type="text"
                          id="objectives"
                          rows="2"
                          class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Increase inventory efficiency, reduce overstock, enhance prediction accuracy."
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="corevalues"
                          class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                        >
                          Core Values
                        </label>
                        <textarea
                          type="text"
                          id="corevalues"
                          rows="1"
                          class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Simplicity, Accuracy, Reliability"
                          required
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
                          required
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
                          required
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
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div className="py-4 px-6 border bg-[#F8F8FB]">
                    <button className="flex justify-center w-full rounded my-auto flex p-2 px-4  bg-[#0568FD] text-white">
                      <span>Mint the Spell</span>
                      <img
                        src="/Sparkles.svg"
                        className="my-auto ml-1"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <CreateSpellModal />
    </>
  );
};

export default SpellDashboard;
