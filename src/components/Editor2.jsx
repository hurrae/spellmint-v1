import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Editor2 = ({ initText }) => {
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
      onChange={handleChange}
      autoFocus
      getSunEditorInstance={getSunEditorInstance}
      height="70vh"
      //   defaultValue={initText}
      setContents={defText}
      setDefaultStyle="font-family: 'Inter Tight', sans-serif; font-size: 18px;"
      setOptions={{
        showPathLabel: false,
        // minHeight: "70vh",
        // maxHeight: "70vh",
        placeholder: "Enter your text here!!!",

        buttonList: [
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["paragraphStyle"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          // ["fontColor", "hiliteColor"],
          // ["removeFormat"],
          "/", // Line break
          ["outdent", "indent"],
          ["align", "horizontalRule", "list", "lineHeight"],
          ["table", "link"],
          ["preview", "print"],
        ],
        formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
        font: [
          "Arial",
          "Calibri",
          "Comic Sans",
          "Courier",
          "Garamond",
          "Georgia",
          "Impact",
          "Lucida Console",
          "Palatino Linotype",
          "Segoe UI",
          "Tahoma",
          "Times New Roman",
          "Trebuchet MS",
        ],
      }}
    />
  );
};

export default Editor2;
