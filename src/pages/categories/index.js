import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import CategoriesData from "@/components/data/CategoriesData";
import Head from "next/head";
import CreateProjectModal from "@/components/projectmodals/CreateProjectModal";
import { useState } from "react";
import { getSession } from "next-auth/react";

const CategoriesIndex = ({ session }) => {
  const { expand } = useContext(StateContext);
  const [selectCat, setselectCat] = useState("");
  return (
    <>
      <Head>
        <title>Categories | Spellmint</title>
        <meta
          name="description"
          content="Swap chaos for clarity with Spellmint, the AI that turns brainstorming into brilliance. Equip your teams with cutting-edge planning tools for decision-making so smooth, it'll feel like gliding on air!"
        />
      </Head>
      <div>
        <Navbar />
        <Sidebar />

        <div className={`p-6 ${expand ? "lg:ml-64" : "ml-20"} `}>
          {/* <div className="p-6 sm:ml-64 h-screen"> */}
          <div className="py-2 lg:p-6 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
            <div className=" rounded justify-between">
              <h2 className="text-2xl font-bold my-auto">Browse Categories</h2>
              <p className="text-grshade">
                Browse through various themes and subject areas to unleash the
                potential of our AI.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 w-[97%]">
              {CategoriesData.map((category, index) => {
                return (
                  <Category
                    setselectCat={setselectCat}
                    key={index}
                    title={category.title}
                    desc={category.desc}
                    imgLink={category.imgLink}
                    id={category.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal session={session} category={selectCat} />
    </>
  );
};

export default CategoriesIndex;

const Category = ({ id, title, desc, imgLink, setselectCat }) => {
  return (
    <div
      className={`border-2 rounded-lg overflow-hidden ${
        id < 8 ? "cursor-pointer" : "opacity-50"
      }`}
      data-modal-target={id < 8 ? "project-modal" : ""}
      data-modal-toggle={id < 8 ? "project-modal" : ""}
      onClick={() => setselectCat(title)}
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
