"use client";
import { getSearchUrl } from "@/utils/get-search-url";
import { ArrowCounterclockwise16Regular } from "@fluentui/react-icons";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

export const SearchTitle = ({ query }) => {
  const router = useRouter();

  return (
    <div className="flex items-center pb-4 mb-6 border-b gap-4">
      <div
        className="flex-1 text-lg sm:text-xl text-black text-ellipsis overflow-hidden whitespace-nowrap"
        title={query}
      >
        {query}
      </div>
      <div className="flex-none">
        <button
          onClick={() => {
            router.push(getSearchUrl(encodeURIComponent(query), nanoid()));
          }}
          type="button"
          className="rounded flex gap-2 items-center bg-transparent px-2 py-1 text-xs font-semibold text-blue-500 hover:bg-zinc-100"
        >
          <ArrowCounterclockwise16Regular />
          Rewrite
        </button>
      </div>
    </div>
  );
};
