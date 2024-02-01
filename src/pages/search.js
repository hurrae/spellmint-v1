"use client";
import { Result } from "@/components/result";
import { Search } from "@/components/Search";
import { SearchTitle } from "@/components/SearchTitle";
import { useSearchParams } from "next/navigation";

const search = () => {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("q") || "");
  const rid = decodeURIComponent(searchParams.get("rid") || "");

  return (
    <div className="absolute inset-0">
      <div className="mx-auto max-w-3xl absolute inset-4 md:inset-8 bg-white">
        <div className="h-20 pointer-events-none rounded-t-2xl w-full backdrop-filter absolute top-0 bg-gradient-to-t from-transparent to-white [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="px-4 md:px-8 pt-6 pb-24 rounded-2xl ring-8 ring-gray-300/20 border border-zinc-200 h-full overflow-auto">
          <SearchTitle query={query} />
          <Result key={rid} query={query} rid={rid} />
        </div>
        <div className="h-80 pointer-events-none w-full rounded-b-2xl backdrop-filter absolute bottom-0 bg-gradient-to-b from-transparent to-white [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        <div className="absolute z-10 flex items-center justify-center bottom-6 px-4 md:px-8 w-full">
          <div className="w-full">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
