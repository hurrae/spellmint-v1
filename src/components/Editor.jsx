import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";

// import { saveAs } from "file-saver";
// import { pdfExporter } from "quill-to-pdf";

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

  //   useEffect(() => {
  //     if (quill) {
  //       quill.clipboard.dangerouslyPasteHTML(
  //         '<p class="ql-align-center"><strong class="ql-size-large">ChatApp - Product Requirements Document</strong></p>'
  //       );
  //     }
  //   }, [quill]);

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        '<h3 class="ql-align-center"><strong class="ql-size-large">ChatApp - Product Requirements Document</strong></h3><p class="ql-align-center"><br></p><p class="ql-align-justify"><br></p><h2 class="ql-align-justify"><strong>Product Strategy</strong></h2><p class="ql-align-justify"><br></p><h3 class="ql-align-justify"><strong>1. Product Vision</strong></h3><p class="ql-align-justify"><br></p><p class="ql-align-justify">Our product, Inventory Pro, will revolutionize inventory management for businesses by providing real-time stock visibility, accurate demand forecasting, and intuitive reporting.</p><p class="ql-align-justify"><br></p><h3 class="ql-align-justify"><strong>2. Product Objectives</strong></h3><p class="ql-align-justify"><br></p><ul><li>Increase inventory efficiency by automating reorder processes and reducing overstock.</li><li>Enhance prediction accuracy through AI-powered algorithms.</li><li class="ql-align-justify">Improve user experience with a user-friendly and visually appealing interface</li></ul>'
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

  //   const clickHandler = async () => {
  //     const delta = quill.getContents(); // gets the Quill delta
  //     const pdfAsBlob = await pdfExporter.generatePdf(delta); // converts to PDF
  //     saveAs(pdfAsBlob, "pdf-export.pdf"); // downloads from the browser
  //   };

  return (
    <div style={{ width: 870, height: "75vh" }}>
      <div ref={quillRef} />
      {/* <div id="toolbar"></div>
      <div id="editor" /> */}
      {/* <button onClick={clickHandler}>Click here</button> */}
    </div>
  );
};

export default Editor;
