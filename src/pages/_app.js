import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
          strategy="beforeInteractive"
        />
      </>
    </SessionProvider>
  );
}
