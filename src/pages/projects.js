import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProjectTable from "@/components/ProjectTable";
import CreateProjectModal from "@/components/projectmodals/CreateProjectModal";

const projects = () => {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />

        <div class="p-6 sm:ml-64 h-screen">
          <div class="p-6 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div class="flex mb-4 justify-between">
              <div className=" rounded justify-between">
                <h2 className="text-2xl font-bold my-auto">Browse Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus libero dolor.
                </p>
              </div>
              <div className="space-x-3 my-auto">
                <button className="rounded p-2 px-4 font-semibold bg-gray-200">
                  Explore Spells
                </button>
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

            {/* Table */}
            <div>
              <ProjectTable />
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal />
    </>
  );
};

export default projects;
