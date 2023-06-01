import React from "react";
import SpellData from "./data/SpellsData";
import { useState } from "react";

const CreateSpellModal = () => {
  const [spellSelect, setspellSelect] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // const selectedValue = document.querySelector(
    //   'input[name="bordered-radio"]:checked'
    // ).value;
    console.log("Selected value:", spellSelect);
  };

  const bgcolors = [
    "bg-[#0568FD]",
    "bg-[#46BD0E]",
    "bg-[#EE0A18]",
    "bg-[#FF8328]",
    "bg-[#C158E7]",
    "bg-[#41ADDA]",
    "bg-[#3F5DC8]",
    "bg-[#F041AA]",
    "bg-[#AD6523]",
    "bg-[#6D00FF]",
    "bg-[#12C0C2]",
  ];

  const bordercolors = [
    "border-[#0568FD]",
    "border-[#46BD0E]",
    "border-[#EE0A18]",
    "border-[#FF8328]",
    "border-[#C158E7]",
    "border-[#41ADDA]",
    "border-[#3F5DC8]",
    "border-[#F041AA]",
    "border-[#AD6523]",
    "border-[#6D00FF]",
    "border-[#12C0C2]",
  ];

  const textcolors = [
    "text-[#0568FD]",
    "text-[#46BD0E]",
    "text-[#EE0A18]",
    "text-[#FF8328]",
    "text-[#C158E7]",
    "text-[#41ADDA]",
    "text-[#3F5DC8]",
    "text-[#F041AA]",
    "text-[#AD6523]",
    "text-[#6D00FF]",
    "text-[#12C0C2]",
  ];

  const ringcolors = [
    "focus:ring-[#0568FD]",
    "focus:ring-[#46BD0E]",
    "focus:ring-[#EE0A18]",
    "focus:ring-[#FF8328]",
    "focus:ring-[#C158E7]",
    "focus:ring-[#41ADDA]",
    "focus:ring-[#3F5DC8]",
    "focus:ring-[#F041AA]",
    "focus:ring-[#AD6523]",
    "focus:ring-[#6D00FF]",
    "focus:ring-[#12C0C2]",
  ];
  // const bgSelect = bgcolors[colorNo];
  // const borderSelect = bordercolors[colorNo];

  // const bgColors = SpellData.map((spell) => {
  //   return "bg-" + spell.color;
  // });

  // const borderColors = SpellData.map((spell) => {
  //   return "border-" + spell.color;
  // });

  // console.log("Bgcolors: ", bgColors);
  // console.log("Bordercolors: ", borderColors);

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {SpellData.map((spell, index) => {
                    // const path = `/Spells/${spell.name}.svg`;
                    // console.log("path: ", path);
                    return (
                      <div
                        onClick={() => setspellSelect(spell.name)}
                        className={`flex items-center ${
                          spellSelect == spell.name ? bgcolors[index] : ""
                        } bg-opacity-10 px-3 border-2 ${
                          spellSelect == spell.name ? bordercolors[index] : ""
                        } rounded`}
                      >
                        <img
                          src={`/Spells/${spell.name}.svg`}
                          // src={path}
                          className={`rounded p-1 ${bgcolors[index]}`}
                          alt=""
                        />
                        <label
                          for={`bordered-radio-${index}`}
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {spell.name}
                        </label>
                        <input
                          id={`bordered-radio-${index}`}
                          type="radio"
                          value="product"
                          name="bordered-radio"
                          class={`w-4 h-4 ${textcolors[index]} bg-gray-100 border-gray-300 ${ringcolors[index]}  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                type="submit"
                className="flex justify-center text-center w-full text-white bg-[#0568FD] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span className="">Start Minting</span>
                <img src="/Sparkles.svg" className="ml-2" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpellModal;
