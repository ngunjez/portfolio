import "@/styles/globals.css";
import { AppProps } from "next/app";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import { NextPage } from "next/types";
import HomeLayout from "@/Layout/Layout";
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
 
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) => <HomeLayout>{page}</HomeLayout>);
 
  // Initialize Microsoft Clarity
  useEffect(() => {
    // Define the clarity function
    (window as any).clarity = (window as any).clarity || function() {
      ((window as any).clarity.q = (window as any).clarity.q || []).push(arguments);
    };
 
    // Load the Clarity script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.clarity.ms/tag/r9yhrrcdo8";
    
    document.head.appendChild(script);
    
    // Clean up function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
 
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}