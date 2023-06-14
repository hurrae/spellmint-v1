import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useContext } from "react";
import { StateContext } from "@/utils/StateContext";
import {
  ArrowLeft24Regular,
  Delete24Regular,
  Link24Regular,
} from "@fluentui/react-icons";
// import Editor from "@/components/Editor";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import Editor2 from "@/components/Editor2";
import DeleteSpellModal from "@/components/spellmodals/DeleteSpellModal";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Edit20Regular } from "@fluentui/react-icons";
import ShareSpellModal from "@/components/spellmodals/ShareSpellModal";
import PageNotFound from "@/components/PageNotFound";

const SpellDashboard = ({ session, spellsData }) => {
  const { expand } = useContext(StateContext);
  const table = [1, 2];
  const router = useRouter();
  // const { data: session } = useSession();
  const [spellData, setspellData] = useState(
    spellsData.data ? spellsData.data : null
  );
  const [spellName, setspellName] = useState(spellData ? spellData.name : null);
  const [toDelete, settoDelete] = useState(
    spellData
      ? {
          name: spellData.name,
          id: spellData._id,
        }
      : null
  );
  console.log("Inside spell page: ", spellData);
  // let oldSpellName = spellName;
  // const [initText, setinitText] = useState(
  //   "<p><strong>Product Description:</strong> This product is an AI-powered chatbot designed to answer your questions about any topic. It is equipped with a powerful natural-language processing engine that can understand complicated conversations. It also has a vast knowledge base filled with extensive training data, so it can quickly process your inquiries and provide comprehensive and accurate answers.</p><p><strong>Scenario (Explained to a 5-Year Old):</strong> This product is like a super smart friend who knows about any topic you can think of. Whenever you have a question, just ask the AI and it will give you an answer.</p><p><strong>Use-cases:</strong></p><ol><li><strong>Research:</strong> Quickly and accurately answer questions about an unfamiliar topic.</li><li><strong>Communications:</strong> Easily explain complex concepts for conversations with friends or family.</li><li><strong>Education:</strong> Aid in learning new skills by providing clear explanations and helpful examples.</li></ol>"
  // );

  const [initText, setinitText] = useState(
    spellData.res_text
      ? spellData.res_text
      : '<h2 style="text-align: center"> ' +
          spellData.proj_name +
          " - Product Requirements Document</h2><p><br></p>"
  );

  const [isEditing, setisEditing] = useState(false);
  function handleBlurClick() {
    if (spellName.length >= 3) {
      axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/renameSpell`,
        data: {
          proj_name: spellData.proj_name,
          spellId: spellData._id,
          user_email: session.user.email,
          newSpellName: spellName,
        },
      })
        .then(function (res) {
          setisEditing(false);
          // oldSpellName = spellName;
          toast.success(<div> Spell Name Updated </div>);
          // router.push(`/projects/${spellData.proj_name}/${spellName}`);
          const newUrl = `/projects/${spellData.proj_name}/${spellName}`;
          window.history.pushState({}, "", newUrl);
          console.log("Rename spell, Response: ", res);
          // setload(false);
        })
        .catch((err) => {
          // setload(false);
          console.log("this is edit spell name error", err);
          toast.error(
            <div> Spell with that name already exists in this project </div>
          );
        });
    }
  }

  return (
    <>
      {spellData ? (
        <>
          <div className="h-screen">
            <Navbar />
            <Sidebar />

            <div class={` p-6 pb-0 pl-0 ${expand ? "ml-64" : "ml-20"} `}>
              {/* <div class="p-6 sm:ml-64 h-screen"> */}
              <div class="p-6 pl-0 pt-4 pb-0 space-y-6 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
                <div className="flex justify-between">
                  <div className="ml-4 flex space-x-3">
                    <span
                      onClick={() => router.back()}
                      className="cursor-pointer my-auto"
                    >
                      <ArrowLeft24Regular />
                    </span>

                    {isEditing ? (
                      <input
                        type="text"
                        value={spellName}
                        required
                        onChange={(e) => setspellName(e.target.value)}
                        onBlur={handleBlurClick}
                        className="py-0 px-2 text-lg"
                        autoFocus
                      />
                    ) : (
                      <>
                        <h2 className="text-xl my-auto">{spellName}</h2>
                        <Edit20Regular
                          className="cursor-pointer text-[#697283] my-auto "
                          onClick={() => setisEditing(true)}
                        />
                      </>
                    )}
                    {/* <span className="my-auto">
                <ChevronRight20Filled />
              </span>
              <h2 className="text-xl font-bold my-auto">ChatApp Spell</h2>
              <span className="h-fit my-auto font-medium text-sm border-2 rounded bg-gray-100 px-2 rounded text-[#697283]">
                Software Product
              </span> */}
                  </div>

                  <div>
                    <button
                      data-modal-target="spell-share-modal"
                      data-modal-toggle="spell-share-modal"
                      className="mr-3 p-1 bg-[#0568FD] rounded text-white"
                    >
                      <Link24Regular />
                    </button>
                    <button
                      data-modal-target="spell-delete-modal"
                      data-modal-toggle="spell-delete-modal"
                      type="button"
                      className="mr-3 p-1 bg-[#EA4335] rounded text-white"
                    >
                      <Delete24Regular />
                    </button>
                    <button
                      href="#"
                      class="mr-3 px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                    >
                      Download as DOC
                    </button>
                    <button
                      href="#"
                      class="mr-3 px-6 p-1  border-2 rounded bg-[#F8F8FB] dark:hover:bg-gray-700 dark:text-white group"
                    >
                      Download as PDF
                    </button>
                  </div>
                </div>

                <div className="w-full flex mb-4 justify-between">
                  <div className="w-1/3">
                    <div className="border flex space-x-3 w-full p-5 px-6 bg-[#F8F8FB]">
                      <h2 className="text-xl font-bold my-auto">ChatApp</h2>
                      <span className="h-fit my-auto font-medium text-sm border-2 rounded bg-[#FFFFFF] px-2 rounded text-[#697283]">
                        Software Product
                      </span>
                    </div>
                    <SpellForm
                      initText={initText}
                      setinitText={setinitText}
                      spellData={spellData}
                    />
                  </div>
                  <div className="w-2/3">
                    {/* <Editor initText={initText} setinitText={setinitText} /> */}
                    <Editor2 initText={initText} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            className="font-medium"
          />
          <DeleteSpellModal
            session={session}
            toDelete={toDelete}
            page={"spell"}
          />
          <ShareSpellModal spellData={spellData} />
        </>
      ) : (
        <>
          <div>
            <Navbar />
            <Sidebar />
            <PageNotFound />
          </div>
        </>
      )}
    </>
  );
};

export default SpellDashboard;

const SpellForm = ({ initText, setinitText, spellData }) => {
  const [load, setload] = useState(false);
  if (spellData.res_text) {
    setinitText(spellData.res_text);
  }

  const onSubmit = (values) => {
    setload(true);
    console.log("Values received: ", values);
    // setinitText("response got<p><br></p><p><br></p>Hello World");

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/prompts/test3`,
      data: {
        PurposeAndScope: values.PurposeAndScope,
        ProductDescription: values.ProductDescription,
        KeyUsers: values.KeyUsers,
        UserActions: values.UserActions,
      },
      // data: {
      //   PurposeAndScope: "hello",
      //   ProductDescription: "hello",
      //   KeyUsers: "hello",
      //   UserActions: "hello",
      // },
    })
      .then(function (res) {
        console.log("Api Response: ", res);
        const data = res.data.prd;
        let defStr =
          '<h2 style="text-align: center"> ' +
          spellData.proj_name +
          " - Product Requirements Document</h2><p><br></p>";
        data.forEach((el) => {
          defStr += el.text;
          defStr += "<p><br></p>";
        });
        console.log("defStr 2: ", defStr);

        axios({
          method: "post",
          url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/updateResText`,
          data: {
            spellId: spellData._id,
            res_text: defStr,
          },
        })
          .then((res) => {
            console.log("New Res Text updated successfully");
          })
          .catch((err) => console.log("error occured: ", err));

        setinitText(defStr);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("Error Occured: ", err);
      });
  };

  const formik = useFormik({
    initialValues: {
      PurposeAndScope: "",
      ProductDescription: "",
      KeyUsers: "",
      UserActions: "",
    },
    onSubmit,
  });

  return (
    <form action="#" onSubmit={formik.handleSubmit}>
      <div>
        <div className="h-[62vh] overflow-y-scroll py-8 px-6 mx-auto max-w-screen-md">
          <div className="space-y-4 text-base">
            <div>
              <label
                for="PurposeAndScope"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Purpose and Scope
              </label>
              <textarea
                type="text"
                id="PurposeAndScope"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="To build a reliable ride-hailing app"
                required
                {...formik.getFieldProps("PurposeAndScope")}
              />
            </div>
            <div>
              <label
                for="ProductDescription"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Product Description
              </label>
              <textarea
                type="text"
                id="ProductDescription"
                rows="2"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="An app connecting drivers and passengers for efficient city travel"
                required
                {...formik.getFieldProps("ProductDescription")}
              />
            </div>
            <div>
              <label
                for="KeyUsers"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Key Users
              </label>
              <textarea
                type="text"
                id="KeyUsers"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Commuters, Tourists, Drivers"
                required
                {...formik.getFieldProps("KeyUsers")}
              />
            </div>

            <div>
              <label
                for="UserActions"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                User Actions
              </label>
              <textarea
                type="text"
                id="UserActions"
                rows="2"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Request ride, Accept ride, Navigate to destination"
                required
                {...formik.getFieldProps("UserActions")}
              />
            </div>

            <div>
              <label
                for="targetmarket"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Target Market
              </label>
              <textarea
                type="text"
                id="targetmarket"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Small businesses in the retail sector"
              />
            </div>

            <div>
              <label
                for="targetmarket"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Target Market
              </label>
              <textarea
                type="text"
                id="targetmarket"
                rows="1"
                class="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Small businesses in the retail sector"
              />
            </div>
          </div>
        </div>
        <div className="py-4 px-6 border bg-[#F8F8FB]">
          <button
            type="submit"
            className={`flex justify-center w-full rounded my-auto flex p-2 px-4  ${
              !load ? "bg-[#0568FD]" : "bg-[#789bcf]"
            } text-white`}
            disabled={load}
          >
            <span>Mint the Spell</span>
            <img src="/Sparkles.svg" className="my-auto ml-1" alt="" />
          </button>
        </div>
      </div>
    </form>
  );
};

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

  let { url } = req;
  url = url.split("/");
  const proj_name = url[2].replace(/%20/g, " ");
  const spell_name = url[3].replace(/%20/g, " ");

  let spellsData;
  try {
    const res = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/getSpell`,
      data: {
        user_email: session.user.email,
        proj_name,
        spell_name,
      },
    });
    spellsData = res.data;
    console.log("response: ", res);
  } catch (error) {
    spellsData = {};
  }

  return {
    props: { session, spellsData },
  };
}
