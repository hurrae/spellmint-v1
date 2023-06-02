import React from "react";
import {
  Home24Regular,
  Diversity24Regular,
  Wand24Regular,
  DataUsage24Regular,
  Info24Regular,
  Settings24Regular,
  ArrowCircleUp24Regular,
  ArrowExportRtl24Regular,
  ArrowExportLtr24Regular,
} from "@fluentui/react-icons";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import { useEffect } from "react";

const Sidebar = () => {
  const router = useRouter();
  const actLink = router.pathname.split("/")[1];
  console.log("actlink: ", router);
  const { expand, toggleMenu } = useContext(StateContext);

  // console.log(actLink);
  return (
    <aside
      id="logo-sidebar"
      class={`fixed top-0 left-0 z-40 ${
        expand ? "w-64" : ""
      } h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div class="flex flex-col justify-between h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/dashboard"
              class={`px-4 flex items-center p-2 ${
                actLink == "dashboard"
                  ? "text-[#0568FD] border-r-4"
                  : "text-grshade"
              }  border-[#0568FD] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Home24Regular />
              <span class={`ml-3 ${expand ? "" : "hidden"}`}>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              class={`flex px-4 ${
                actLink == "projects"
                  ? "text-[#0568FD] border-r-4"
                  : "text-grshade"
              } items-center p-2 border-[#0568FD]  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Diversity24Regular />
              <span
                class={`flex-1 ml-3 whitespace-nowrap ${
                  expand ? "" : "hidden"
                }`}
              >
                Projects
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-4 flex items-center p-2 text-grshade dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <DataUsage24Regular />
              <span
                class={`flex-1 ml-3 whitespace-nowrap ${
                  expand ? "" : "hidden"
                }`}
              >
                Credits Usage
              </span>
            </a>
          </li>
          <li>
            <a
              href="/categories"
              class={`px-4 ${
                actLink == "categories"
                  ? "text-[#0568FD] border-r-4"
                  : "text-grshade"
              } flex border-[#0568FD] items-center p-2  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Wand24Regular />
              <span
                class={`flex-1 ml-3 whitespace-nowrap ${
                  expand ? "" : "hidden"
                }`}
              >
                Categories
              </span>
            </a>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="px-4 flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <ArrowCircleUp24Regular />
              <span class={`ml-4 ${expand ? "" : "hidden"}`}>Upgrade</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-4 flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <Settings24Regular />
              <span class={`ml-4 ${expand ? "" : "hidden"}`}>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="px-4 flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <Info24Regular />
              <span class={`ml-4 ${expand ? "" : "hidden"}`}>Support</span>
            </a>
          </li>
          <li className={`${expand ? "" : "hidden"} flex justify-between`}>
            <button
              href="#"
              class={`px-4 ml-3 px-6 p-1 text-grshade border-2 rounded bg-gray-100 dark:hover:bg-gray-700 dark:text-white group`}
            >
              Logout
            </button>
            <button
              onClick={toggleMenu}
              // onClick={() => setexpand(false)}
              className=" p-1 border-2 mr-4"
            >
              <ArrowExportRtl24Regular />
            </button>
          </li>
          <li className={`flex px-1 ${!expand ? "" : "hidden"}`}>
            <button
              onClick={toggleMenu}
              // onClick={() => setexpand(true)}
              className="mx-auto p-1 border-2"
            >
              <ArrowExportLtr24Regular />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
