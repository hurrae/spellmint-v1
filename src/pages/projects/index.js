import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProjectTable from "@/components/ProjectTable";
import CreateProjectModal from "@/components/projectmodals/CreateProjectModal";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import Script from "next/script";
import { Wand48Regular } from "@fluentui/react-icons";
import Head from "next/head";

const projects = ({ session, projectData }) => {
  const { expand } = useContext(StateContext);
  // const { data: session } = useSession();
  console.log("Session in Projects: ", session);
  const [projectsData, setprojectsData] = useState(projectData);
  console.log("Projects Data: ", projectsData);
  // const [load, setload] = useState(true);

  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: `${process.env.NEXT_PUBLIC_HOST}/api/projects/getProject`,
  //     data: {
  //       user_email: session.user.email,
  //     },
  //   })
  //     .then(function (res) {
  //       console.log("Get all Project, Response: ", res);
  //       setprojectsData(res.data);
  //       setload(false);
  //     })
  //     .catch((err) => {
  //       setload(false);
  //       console.log("this is get project error", err);
  //       // toast.error(<div>Project Not Found</div>);
  //     });
  // }, []);

  return (
    // !load && (
    <>
      <Head>
        <title>Projects | Spellmint</title>
      </Head>
      <div>
        <Navbar />
        <Sidebar />

        <div className={`p-6 ${expand ? "ml-64" : "ml-20"} `}>
          {/* <div className="p-6 sm:ml-64 h-screen"> */}
          <div className="p-6 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className="flex mb-4 justify-between">
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
              {projectsData.data.length > 0 ? (
                <ProjectTable projectsData={projectsData.data} />
              ) : (
                <div className="flex">
                  <div className="mx-auto mt-14 text-center space-y-6">
                    <div className="mx-auto p-4 bg-[#E6F0FF] h-fit w-fit rounded-full">
                      <Wand48Regular className="text-[#0568FD4D]" />
                    </div>
                    {/* <div className=""> */}
                    <p className="mx-auto w-[40%] text-[#697283] text-center">
                      Leverage the power of our platform to transform your
                      unique ideas into reality. Get started, and let your
                      creativity flow!
                    </p>
                    {/* </div> */}
                    <button
                      data-modal-target="project-modal"
                      data-modal-toggle="project-modal"
                      className="mx-auto rounded my-auto flex p-2 px-4 font-semibold bg-[#0568FD] text-white"
                      type="button"
                    >
                      New Project
                      {/* <img
                        src="/Sparkles.svg"
                        className="my-auto ml-1"
                        alt=""
                      /> */}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal session={session} />
    </>
  );
  // );
};

export default projects;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await axios({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_HOST}/api/projects/getProject`,
    data: {
      user_email: session.user.email,
    },
  });
  console.log("response: ", res);
  // .then(function (res) {
  //   console.log("Get all Project, Response: ", res);
  //   setprojectsData(res.data);
  //   setload(false);
  // })
  // .catch((err) => {
  //   setload(false);
  //   console.log("this is get project error", err);
  //   // toast.error(<div>Project Not Found</div>);
  // });
  const projectData = res.data;

  return {
    props: { session, projectData },
  };
}
