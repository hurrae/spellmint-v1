import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const ReadEditor = ({ initText }) => {
  const editor = useRef();

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };
  function handleChange(content) {
    console.log(content); //Get Content Inside Editor
  }
  const [defText, setdefText] = useState(initText);
  useEffect(() => {
    setdefText(initText);
  }, [initText]);

  return (
    <SunEditor
      setAllPlugins={false}
      disable={true}
      hideToolbar={true}
      getSunEditorInstance={getSunEditorInstance}
      setContents={defText}
      //   setOptions={{
      //     toolbarContainer: "#hiddenToolbar",
      //     resizingBar: false,
      //     buttonList: [],
      //     readOnly: true,
      //   }}
      setDefaultStyle="font-family: 'Inter Tight', sans-serif; font-size: 18px;"
    />
  );
};

export default ReadEditor;
