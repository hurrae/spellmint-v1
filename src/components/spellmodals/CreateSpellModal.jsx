import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  bgcolors,
  bordercolors,
  textcolors,
  ringcolors,
} from "../data/SpellColors";
import { CatSpellMap } from "../data/SpellsData";
import SpellTypes from "../data/SpellsData";

const CreateSpellModal = ({ proj_id, proj_name, proj_category, session }) => {
  const [spellSelect, setspellSelect] = useState("");
  const [spellName, setspellname] = useState("");
  const [load, setload] = useState(false);

  const spellsubset = CatSpellMap[proj_category] || [];
  const SpellData = SpellTypes.filter((spellType) =>
    spellsubset.includes(spellType.name)
  );

  const submitHandler = (e) => {
    e.preventDefault();
    // const selectedValue = document.querySelector(
    //   'input[name="bordered-radio"]:checked'
    // ).value;
    console.log("Selected value:", spellSelect);
    console.log("Spell name: ", spellName);

    setload(true);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/newSpell`,
      data: {
        name: spellName,
        user_email: session.user.email,
        spell_type: spellSelect,
        proj_id,
        proj_name,
        proj_category,
        created_by: session.user.name,
      },
    })
      .then(function (res) {
        toast.success(
          <div>
            {" "}
            Spell <strong>{spellName}</strong> Created{" "}
          </div>
        );

        // router.push("/projects/chatapp");
        setTimeout(() => {
          window.location.href = `${process.env.NEXT_PUBLIC_HOST}/projects/${proj_name}/${spellName}`;
          // router.push('/path-to-redirect');
        }, 3000);
        console.log("Create Project Modal, Response: ", res);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("this is create project error", err);
        toast.error(
          <div>
            {" "}
            Spell <strong>{spellName}</strong> already exists{" "}
          </div>
        );
        // if (err.response.status == 400) {
        //   toast.error("This Transaction Id is already used.");
        //   // setexistingId(true);
        // } else if (err.response.status == 403) {
        //   toast.error("Submit transaction id again in few minutes");
        // }
      });
  };

  return (
    <div
      id="spell-modal"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative mt-10 w-full max-w-xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="bg-gray-50 flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
            <div className="">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Mint a New Spell
              </h3>
              <p className="text-gray-500">
                Choose a spell and start crafting your unique narrative.
              </p>
            </div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="spell-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div class="p-6 space-y-6">
            <form class="space-y-6" onSubmit={submitHandler}>
              <div className="space-y-6">
                <div>
                  <label
                    for="spellname"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Spell Name
                  </label>
                  <input
                    type="text"
                    name="spellname"
                    id="spellname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Eg: ChatApp - PRD"
                    required
                    onChange={(e) => setspellname(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Spell Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {SpellData.map((spell, index) => {
                      // const path = `/Spells/${spell.name}.svg`;
                      // console.log("path: ", path);
                      const id = spell.id - 1;
                      return (
                        <div
                          onClick={() => setspellSelect(spell.name)}
                          className={`flex items-center ${
                            spellSelect == spell.name ? bgcolors[id] : ""
                          } bg-opacity-10 px-3 border-2 ${
                            spellSelect == spell.name ? bordercolors[id] : ""
                          } rounded`}
                        >
                          <img
                            src={`/Spells/${spell.name}.svg`}
                            // src={path}
                            className={`rounded p-1 ${bgcolors[id]}`}
                            alt=""
                          />
                          <label
                            for={`bordered-radio-${id}`}
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {spell.name}
                          </label>
                          <input
                            id={`bordered-radio-${id}`}
                            type="radio"
                            value="product"
                            name="bordered-radio"
                            class={`w-4 h-4 ${textcolors[id]} bg-gray-100 border-gray-300 ${ringcolors[id]}  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={!spellSelect || load}
                className={`${
                  spellSelect && !load
                    ? "bg-blue-700 hover:bg-blue-800"
                    : "bg-blue-400"
                } flex justify-center text-center w-full text-white bg-[#0568FD]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
              >
                <span className="">Start Minting</span>
                <img src="/Sparkles.svg" className="ml-2" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        className="font-primerg font-medium"
      />
    </div>
  );
};

export default CreateSpellModal;
