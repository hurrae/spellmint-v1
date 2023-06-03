import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProjectTable from "@/components/ProjectTable";
import CreateProjectModal from "@/components/projectmodals/CreateProjectModal";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import { useSession } from "next-auth/react";

const projects = () => {
  const { expand } = useContext(StateContext);
  const { data: session } = useSession();
  console.log("Session in Projects: ", session);
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />

        <div class={`p-6 ${expand ? "ml-64" : "ml-20"} `}>
          {/* <div class="p-6 sm:ml-64 h-screen"> */}
          <div class="p-6 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div class="flex mb-4 justify-between">
              <div className=" rounded justify-between">
                <h2 className="text-2xl font-bold my-auto">Browse Projects</h2>
                <p className="text-grshade">
                  Navigate through your created projects and oversee your work
                  in one place.
                </p>
              </div>
              <div className="space-x-3 my-auto">
                <button className="rounded p-2 px-4 font-semibold bg-gray-100 border-2">
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
      <CreateProjectModal session={session} />
    </>
  );
};

export default projects;
