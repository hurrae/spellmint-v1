import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CreateProjectModal from "@/components/projectmodals/CreateProjectModal";
import { useRouter } from "next/router";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import {
  DocumentBulletList24Regular,
  SurfaceHub24Regular,
  ArrowRight16Filled,
} from "@fluentui/react-icons";
import { getSession } from "next-auth/react";
import { useState } from "react";

const dashboard = ({ session }) => {
  const { expand } = useContext(StateContext);
  const [selectCat, setselectCat] = useState("");
  // const { data: session } = useSession();
  console.log(session, "i am session you wanted");
  return (
    <>
      <Head>
        <title>Dashboard | Spellmint</title>
        <meta
          name="description"
          content="Swap chaos for clarity with Spellmint, the AI that turns brainstorming into brilliance. Equip your teams with cutting-edge planning tools for decision-making so smooth, it'll feel like gliding on air!"
        />
      </Head>

      <div>
        <Navbar />
        <Sidebar />

        <div className={`p-4 ${expand ? "lg:ml-64" : "ml-20"} `}>
          <div className="py-2 lg:p-4 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className=" mb-4 rounded bg-[#F8F8FB] dark:bg-gray-800">
              <div className="p-6 bg-[url('/CurvesPattern.svg')] bg-no-repeat bg-right rounded flex flex-col lg:flex-row justify-between">
                <h2 className="text-2xl font-bold my-auto">
                  Welcome, {session.user.name}.
                </h2>
                <button
                  data-modal-target="project-modal"
                  data-modal-toggle="project-modal"
                  className="w-fit mt-2 rounded p-2 px-4 font-semibold bg-[#7371EE] text-white"
                  type="button"
                  onClick={() => setselectCat("")}
                >
                  New Project
                </button>
              </div>
            </div>
            <div className=" mb-4 rounded-lg border-2 dark:bg-gray-800">
              <div className="p-6 rounded space-y-5">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">Explore Categories</h3>
                    <p>
                      Browse through various themes and subject areas to unleash
                      the potential of our AI.
                    </p>
                  </div>
                  <a
                    href="/categories"
                    className="mt-2 underline underline-offset-2 text-[#7371EE]"
                  >
                    Explore Categories <ArrowRight16Filled />
                  </a>
                </div>
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
                  <Category
                    setselectCat={setselectCat}
                    title="Software Product"
                    desc="Develops and sells software products."
                    imgLink="https://i.imgur.com/CejNbCf.png"
                  />
                  <Category
                    setselectCat={setselectCat}
                    title="Digital Agency"
                    desc="Offers digital marketing and advertising solutions."
                    imgLink="https://i.imgur.com/rs5y2JZ.png"
                  />
                  <Category
                    setselectCat={setselectCat}
                    title="Education"
                    desc="Provides educational services or products."
                    imgLink="https://i.imgur.com/HwnPl1a.png"
                  />
                  <Category
                    setselectCat={setselectCat}
                    title="Finance"
                    desc="Offers financial services, like banking or investing."
                    imgLink="https://i.imgur.com/EW9S0Pq.png"
                  />
                  <Category
                    setselectCat={setselectCat}
                    title="Retail"
                    desc="Sells consumer goods directly to customers."
                    imgLink="https://i.imgur.com/8054JB5.png"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-6 flex flex-col space-y-4 rounded border-gray-200 border-2 dark:bg-gray-800">
                <span className="bg-[#F8F8FB] text-[#697283] p-2 rounded-full w-fit">
                  <DocumentBulletList24Regular />
                </span>
                <h3 className="font-bold">Help Center</h3>
                <p className="text-[#697283]">
                  Find answers, get support, and troubleshoot issues with our
                  comprehensive Help Centre. Our dedicated team is ready to
                  assist you with any concerns you have about using Spellmint.
                </p>
                <a
                  href="https://spellmint.zohodesk.in/"
                  target="_blank"
                  className="text-[#697283] underline underline-offset-2"
                >
                  Open Help Center <ArrowRight16Filled />
                </a>
              </div>
              <div className="p-6 flex flex-col space-y-4 rounded border-gray-200 border-2 dark:bg-gray-800">
                <span className="bg-[#F8F8FB] text-[#697283] p-2 rounded-full w-fit">
                  <SurfaceHub24Regular />
                </span>
                <h3 className="font-bold">Spellmint University</h3>
                <p className="text-[#697283]">
                  Immerse yourself in learning with Spellmint University. Access
                  a wealth of resources, courses, and tutorials designed to help
                  you master all aspects of our platform.
                </p>
                <a
                  className="underline underline-offset-2 text-[#697283]"
                  href="https://www.youtube.com/@Spellmint"
                  target="_blank"
                >
                  Open Spellmint University <ArrowRight16Filled />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal category={selectCat} session={session} />
    </>
  );
};

export default dashboard;

const Category = ({ setselectCat, title, desc, imgLink }) => {
  return (
    <div
      data-modal-target="project-modal"
      data-modal-toggle="project-modal"
      onClick={() => setselectCat(title)}
      className="border-2 rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="h-34 bg-gray-50">
        <img className="mx-auto" src={imgLink} alt="" />
      </div>
      <div className="space-y-2 p-3 bg-white text-center">
        <h3 className="font-bold">{title}</h3>
        <p className="text-[#697283]">{desc}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
