import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";

const Editor = () => {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [{ list: "ordered" }, { list: "bullet" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ align: [] }],
  ];

  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbarOptions,
    },
  });

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        '<p class="ql-align-center"><strong class="ql-size-large">ChatApp - Product Requirements Document</strong></p>'
      );
    }
  }, [quill]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        console.log(quill.getText(), "text only"); // Get text only
        // console.log(quill.getContents(), "delta contents"); // Get delta contents
        console.log(quill.root.innerHTML, "inner html"); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div style={{ width: 870, height: "75vh" }}>
      <div ref={quillRef} />
      {/* <div id="toolbar"></div>
      <div id="editor" /> */}
    </div>
  );
};

export default Editor;
