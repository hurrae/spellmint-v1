import { PresetQuery } from "@/components/PresetQuery";
// import { Skeleton } from "@/components/skeleton";
import { Wrapper } from "@/components/wrapper";
import { TextQuote20Regular } from "@fluentui/react-icons";
import React from "react";

export const Relates = ({ relates }) => {
  return (
    <Wrapper
      title={
        <>
          <TextQuote20Regular /> Related
        </>
      }
      content={
        <div className="flex gap-2 flex-col">
          {relates !== null ? (
            relates.length > 0 ? (
              relates.map(({ question }) => (
                <PresetQuery key={question} query={question}></PresetQuery>
              ))
            ) : (
              <div className="text-sm">No related questions.</div>
            )
          ) : (
            <>
              <div className="animate-pulse rounded-md bg-muted w-full h-5 bg-zinc-200/80"></div>
              <div className="animate-pulse rounded-md bg-muted w-full h-5 bg-zinc-200/80"></div>
              <div className="animate-pulse rounded-md bg-muted w-full h-5 bg-zinc-200/80"></div>
            </>
          )}
        </div>
      }
    ></Wrapper>
  );
};
