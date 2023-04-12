import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CreateProjectModal from "@/components/projectmodals/CreateProjectModal";

const dashboard = () => {
  return (
    <>
      <Head></Head>

      <div>
        <Navbar />
        <Sidebar />

        <div class="p-4 sm:ml-64 ">
          <div class="p-4 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div class=" mb-4 rounded bg-gray-100 dark:bg-gray-800">
              <div className="p-6 rounded flex justify-between">
                <h2 className="text-2xl font-bold my-auto">Welcome, Manoj.</h2>
                <button
                  data-modal-target="project-modal"
                  data-modal-toggle="project-modal"
                  className="rounded p-2 px-4 font-semibold bg-[#0568FD] text-white"
                  type="button"
                >
                  New Project
                </button>
              </div>
            </div>
            <div class=" mb-4 rounded-lg border-2 dark:bg-gray-800">
              <div className="p-6 rounded space-y-5">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">Explore Categories</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed faucibus libero dolor.
                    </p>
                  </div>
                  <button className="underline underline-offset-2 text-[#0568FD]">
                    Explore Categories
                  </button>
                </div>
                <div className="grid gap-4 grid-cols-5">
                  <Category />
                  <Category />
                  <Category />
                  <Category />
                  <Category />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-6 flex flex-col space-y-4 rounded border-gray-200 border-2 dark:bg-gray-800">
                <h3 className="font-bold">Help Center</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus libero dolor, vel convallis mi finibus non. Vivamus
                  egestas vel arcu et malesuada.
                </p>
                <a href="" className="underline underline-offset-2">
                  Open Help Center
                </a>
              </div>
              <div class="p-6 flex flex-col space-y-4 rounded border-gray-200 border-2 dark:bg-gray-800">
                <h3 className="font-bold">Help Center</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus libero dolor, vel convallis mi finibus non. Vivamus
                  egestas vel arcu et malesuada.
                </p>
                <a className="underline underline-offset-2" href="">
                  Open Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal />
    </>
  );
};

export default dashboard;

const Category = () => {
  return (
    <div className="border-2 rounded-lg overflow-hidden">
      <div className="h-32 bg-gray-50"></div>
      <div className="space-y-2 p-3 bg-white text-center">
        <h3 className="font-bold">Software Product</h3>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
  );
};
