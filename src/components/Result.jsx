"use client";
import { Answer } from "@/components/answer";
import { Relates } from "@/components/relates";
import { Sources } from "@/components/sources";
import { parseStreaming } from "@/utils/parse-streaming";
// import { Annoyed } from "lucide-react";
import { useEffect, useState } from "react";

export const Result = ({ query, rid }) => {
  const [sources, setSources] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const [relates, setRelates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    void parseStreaming(
      controller,
      query,
      rid,
      setSources,
      setMarkdown,
      setRelates,
      setError
    );
    return () => {
      controller.abort();
    };
  }, [query]);
  return (
    <div className="flex flex-col gap-8">
      <Answer markdown={markdown} sources={sources}></Answer>
      <Sources sources={sources}></Sources>
      <Relates relates={relates}></Relates>
      {error && (
        <div className="absolute inset-4 flex items-center justify-center bg-white/40 backdrop-blur-sm">
          <div className="p-4 bg-white shadow-2xl rounded text-blue-500 font-medium flex gap-4">
            {/* <Annoyed></Annoyed> */}
            {error === 429
              ? "Sorry, you have made too many requests recently, try again later."
              : "Sorry, we might be overloaded, try again later."}
          </div>
        </div>
      )}
    </div>
  );
};
