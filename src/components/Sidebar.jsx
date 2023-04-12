import React from "react";
import {
  Home24Regular,
  Diversity24Regular,
  Wand24Regular,
  DataUsage24Regular,
} from "@fluentui/react-icons";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="flex flex-col justify-between h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Home24Regular />
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Diversity24Regular />
              <span class="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <DataUsage24Regular />
              <span class="flex-1 ml-3 whitespace-nowrap">Credits Usage</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <span class="ml-4">Upgrade</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <span class="ml-4">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <span class="ml-4">Support</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <span class="ml-4">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
