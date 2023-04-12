import React from "react";
import {
  Home24Regular,
  Diversity24Regular,
  Wand24Regular,
  DataUsage24Regular,
  Info24Regular,
  Settings24Regular,
  ArrowCircleUp24Regular,
} from "@fluentui/react-icons";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const actLink = router.pathname.slice(1);
  // console.log(actLink);
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="flex flex-col justify-between h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/dashboard"
              class={`flex items-center p-2 ${
                actLink == "dashboard"
                  ? "text-[#0568FD] border-r-4"
                  : "text-grshade"
              }  border-[#0568FD] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Home24Regular />
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              class={`flex ${
                actLink == "projects"
                  ? "text-[#0568FD] border-r-4"
                  : "text-grshade"
              } items-center p-2 border-[#0568FD]  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Diversity24Regular />
              <span class="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-grshade dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <DataUsage24Regular />
              <span class="flex-1 ml-3 whitespace-nowrap">Credits Usage</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-grshade dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Wand24Regular />
              <span class="flex-1 ml-3 whitespace-nowrap">Categories</span>
            </a>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <ArrowCircleUp24Regular />
              <span class="ml-4">Upgrade</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <Settings24Regular />
              <span class="ml-4">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-grshade transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <Info24Regular />
              <span class="ml-4">Support</span>
            </a>
          </li>
          <li>
            <button
              href="#"
              class="ml-3 px-6 p-1 text-grshade border-2 rounded bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
