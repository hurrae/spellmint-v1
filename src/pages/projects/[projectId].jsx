import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SpellTable from "@/components/SpellTable";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import { ChevronRight20Filled, Wand48Regular } from "@fluentui/react-icons";
import CreateSpellModal from "@/components/CreateSpellModal";
import { useRouter } from "next/router";
import EditProjectModal from "@/components/projectmodals/EditProjectModal";

const ProjectDashboard = () => {
  const { expand } = useContext(StateContext);
  const table = [1, 2];
  const router = useRouter();
  //   const table = [];

  return (
    <>
      <div>
        <Navbar />
        <Sidebar />

        <div class={`p-6 ${expand ? "ml-64" : "ml-20"} `}>
          {/* <div class="p-6 sm:ml-64 h-screen"> */}
          <div class="p-6 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className="flex space-x-3">
              <h2
                onClick={() => router.push("/projects")}
                className="text-xl my-auto cursor-pointer"
              >
                Projects
              </h2>
              <span className="my-auto">
                <ChevronRight20Filled />
              </span>
              <h2 className="text-xl font-bold my-auto">ChatApp</h2>
              <span className="h-fit my-auto font-medium text-sm border-2 rounded bg-gray-100 px-2 rounded text-[#697283]">
                Software Product
              </span>
            </div>

            <div class="p-6 rounded bg-[#F8F8FB] flex mb-4 justify-between">
              <div className="w-1/2 rounded justify-between">
                <p className=" text-grshade">
                  ChatApp is a messaging and communication platform that allows
                  users to send text messages, voice messages, photos, videos,
                  and other media files....
                </p>
              </div>
              <div className="flex space-x-3 my-auto">
                <button
                  className="my-auto rounded p-2 px-4  bg-gray-100 border-2"
                  data-modal-target="edit-project-modal"
                  data-modal-toggle="edit-project-modal"
                  type="button"
                >
                  Settings
                </button>
                <button
                  data-modal-target="spell-modal"
                  data-modal-toggle="spell-modal"
                  className="rounded my-auto flex p-2 px-4 font-semibold bg-[#0568FD] text-white"
                  type="button"
                >
                  New Spell
                  <img src="/Sparkles.svg" className="my-auto ml-1" alt="" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div>
              {table.length > 0 ? (
                <SpellTable />
              ) : (
                <div className="flex">
                  <div className="mx-auto mt-14 text-center space-y-6">
                    <div className="mx-auto p-4 bg-[#E6F0FF] h-fit w-fit rounded-full">
                      <Wand48Regular className="text-[#0568FD4D]" />
                    </div>
                    {/* <div className=""> */}
                    <p className="mx-auto w-[40%] text-[#697283] text-center">
                      Begin your journey of spellminting and open up to endless
                      magical possibilities. Dive in and craft your first spell
                      today.
                    </p>
                    {/* </div> */}
                    <button
                      data-modal-target="project-modal"
                      data-modal-toggle="project-modal"
                      className="mx-auto rounded my-auto flex p-2 px-4 font-semibold bg-[#0568FD] text-white"
                      type="button"
                    >
                      New Spell
                      <img
                        src="/Sparkles.svg"
                        className="my-auto ml-1"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CreateSpellModal />
      <EditProjectModal />
    </>
  );
};

export default ProjectDashboard;
