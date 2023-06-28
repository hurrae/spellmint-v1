import React from "react";
import fs from "fs";
import path from "path";

export default function HtmlPage({ htmlContent }) {
  return (
    <React.Fragment>
      <link
        href="/static/images/favicon.jpg"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link href="/static/images/webclip.jpg" rel="apple-touch-icon" />
      <link href="/static/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/webflow.css" rel="stylesheet" type="text/css" />
      <link
        href="/static/css/spellmint.webflow.css"
        rel="stylesheet"
        type="text/css"
      />

      <script
        src="https://use.typekit.net/kpn0prh.js"
        type="text/javascript"
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            try{Typekit.load();}catch(e){}
            `,
        }}
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")})(window,document);
            `,
        }}
      ></script>
      {/* <script src="/static/js/webflow.js" type="text/javascript"></script> */}
      <script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>

      <link
        href="/static/images/favicon.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link href="/static/images/webclip.png" rel="apple-touch-icon" />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=649692807b92e58167b2cdae"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>

      {/* Move the script tag to the bottom */}
      <script src="/static/js/webflow.js" type="text/javascript"></script>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "/static/cancellation-and-no-refund-policy.html"
  );
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      htmlContent,
    },
  };
}
