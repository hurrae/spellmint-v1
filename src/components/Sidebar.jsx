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
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const router = useRouter();
  const actLink = router.pathname.split("/")[1];
  console.log("actlink: ", router);
  const { expand, toggleMenu } = useContext(StateContext);

  // console.log(actLink);
  return (
    <aside
      id="logo-sidebar"
      className={` block fixed top-0 left-0 z-40 lg:z-30 ${
        expand ? "w-64" : ""
      } h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-between h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/dashboard"
              className={`px-4 flex items-center p-2 ${
                actLink == "dashboard"
                  ? "text-[#7371EE] border-r-4"
                  : "text-grshade"
              }  border-[#7371EE] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Home24Regular />
              <span className={`ml-3 ${expand ? "" : "hidden"}`}>
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={`flex px-4 ${
                actLink == "projects"
                  ? "text-[#7371EE] border-r-4"
                  : "text-grshade"
              } items-center p-2 border-[#7371EE]  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Diversity24Regular />
              <span
                className={`flex-1 ml-3 whitespace-nowrap ${
                  expand ? "" : "hidden"
                }`}
              >
                Projects
              </span>
            </a>
          </li>
          <li>
            <a
              href="/profile/#CreditsUsage"
              className="px-4 flex items-center p-2 text-grshade dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <DataUsage24Regular />
              <span
                className={`flex-1 ml-3 whitespace-nowrap ${
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
              className={`px-4 ${
                actLink == "categories"
                  ? "text-[#7371EE] border-r-4"
                  : "text-grshade"
              } flex border-[#7371EE] items-center p-2  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Wand24Regular />
              <span
                className={`flex-1 ml-3 whitespace-nowrap ${
                  expand ? "" : "hidden"
                }`}
              >
                Categories
              </span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="/profile/#pricing"
              className="px-4 flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <ArrowCircleUp24Regular />
              <span className={`ml-4 ${expand ? "" : "hidden"}`}>
                Plans & Pricing
              </span>
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className={`flex px-4 ${
                actLink == "profile"
                  ? "text-[#7371EE] border-r-4"
                  : "text-grshade"
              } items-center p-2 border-[#7371EE]  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Settings24Regular />
              <span className={`ml-4 ${expand ? "" : "hidden"}`}>
                Profile Settings
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://spellmint.zohodesk.in/"
              target="_blank"
              className="px-4 flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <Info24Regular />
              <span className={`ml-4 ${expand ? "" : "hidden"}`}>Support</span>
            </a>
          </li>
          <li className={`${expand ? "" : "hidden"} flex justify-between`}>
            <button
              onClick={() => signOut()}
              type="button"
              className={`px-4 ml-3 px-6 p-1 text-grshade border-2 rounded bg-gray-100 dark:hover:bg-gray-700 dark:text-white group`}
            >
              Logout
            </button>
            <button
              onClick={toggleMenu}
              // onClick={() => setexpand(false)}
              className="hidden md:block p-1 rounded border-2 mr-4"
            >
              <ArrowExportRtl24Regular className="text-[#697283] p-[3px]" />
            </button>
          </li>
          <li className={`flex px-1 ${!expand ? "" : "hidden"}`}>
            <button
              onClick={toggleMenu}
              // onClick={() => setexpand(true)}
              className="mx-auto p-1 rounded border-2"
            >
              <ArrowExportLtr24Regular className="text-[#697283] p-[3px]" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
