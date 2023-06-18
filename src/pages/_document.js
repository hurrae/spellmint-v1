import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NG4KM7L" height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
      </body>
    </Html>
  );
}
