import React from "react";
import fs from "fs";
import path from "path";

export default function HtmlPage({ htmlContent }) {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <link href="/static/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/webflow.css" rel="stylesheet" type="text/css" />
      <link
        href="/static/css/closing-media-2-ff73c872f165f3c247023b9.webflow.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script> */}
      <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
      <link href="images/webclip.jpg" rel="apple-touch-icon" />
      <script src="/static/js/webflow.js" type="text/javascript"></script>
      <script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "/static/index.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      htmlContent,
    },
  };
}
