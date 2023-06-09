import React from "react";
import { useRouter } from "next/router";
import SpellTypes from "./data/SpellsData";
import { bgcolors, textcolors } from "./data/SpellColors";
import { useState } from "react";
import { useSession } from "next-auth/react";
import DeleteSpellModal from "./spellmodals/DeleteSpellModal";

const SpellTable = ({ spells }) => {
  console.log("Inside Spells Table: ", spells);
  const [toDelete, settoDelete] = useState({ name: "", id: "" });
  function handleDeleteClick(name, id) {
    console.log("name, id: ", name, id);
    settoDelete({ name, id });
  }
  const { data: session } = useSession();
  return (
    <>
      <div class=" overflow-x-auto  sm:rounded-lg">
        <table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                SPELL NAME
              </th>
              <th scope="col" class="px-6 py-3">
                CREATED ON
              </th>
              <th scope="col" class="px-6 py-3">
                LAST EDITED ON
              </th>
              <th scope="col" class="px-6 py-3">
                CREATED BY
              </th>
              <th scope="col" class="px-6 py-3">
                SPELL TYPE
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {spells.map((spell, index) => {
              return (
                <SpellTableRow
                  handleDeleteClick={handleDeleteClick}
                  id={spell._id}
                  ind={0}
                  name={spell.name}
                  created_on={spell.created_on}
                  last_edited_on={spell.last_edited_on}
                  created_by={spell.created_by}
                  spell_type={spell.spell_type}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <DeleteSpellModal
        session={session}
        toDelete={toDelete}
        page={"project"}
      />
    </>
  );
};

export default SpellTable;

const SpellTableRow = ({
  handleDeleteClick,
  id,
  ind,
  name,
  created_on,
  last_edited_on,
  created_by,
  spell_type,
  index,
}) => {
  //   console.log("Log: ", ind);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const fCreatedOn = formatDate(created_on);
  const fLastEditedOn = formatDate(last_edited_on);

  const cid = SpellTypes.find((spell) => spell.name == spell_type).id;
  console.log("Selected Spell", cid);

  const router = useRouter();
  // console.log("Spell Table Router: ", router);
  return (
    <tr
      class={` border-b ${
        ind % 2 == 1 ? "bg-gray-50" : "bg-white"
      }  dark:bg-gray-900 dark:border-gray-700`}
    >
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
      >
        <a href={router.asPath + `/${name}`}>{name}</a>
      </th>
      <td class="px-6 py-4">{fCreatedOn}</td>
      <td class="px-6 py-4">{fLastEditedOn}</td>
      <td class="px-6 py-4 font-medium text-gray-900">{created_by}</td>
      <td class="px-6 py-4">
        <span
          className={`font-medium bg-opacity-20 ${
            bgcolors[cid - 1]
          } p-1 px-2 rounded ${textcolors[cid - 1]}`}
        >
          {spell_type}
        </span>
      </td>
      <td>
        <button
          id="dropdownMenuIconButton"
          // data-dropdown-toggle="dropdownDots"
          aria-expanded="false"
          data-dropdown-toggle={`dropdown-menu-${index + 1}`}
          className="inline-flex items-center p-2 text-base font-medium text-center text-grshade  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          className="z-30 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id={`dropdown-menu-${index + 1}`}
        >
          <ul class="py-1" role="none">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Rename
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Download
              </a>
            </li>
            <li>
              <button
                onClick={() => handleDeleteClick(name, id)}
                data-modal-target="spell-delete-modal"
                data-modal-toggle="spell-delete-modal"
                class="block w-full py-2  text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};
