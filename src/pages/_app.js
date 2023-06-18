import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { StateProvider } from "@/utils/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
      <>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
          strategy="beforeInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NG4KM7L');
      `}
        </Script>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </>
    </SessionProvider>
  );
}
