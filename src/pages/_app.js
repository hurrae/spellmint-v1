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
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </>
    </SessionProvider>
  );
}
