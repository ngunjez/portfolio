import { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
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
    Component.getLayout ?? ((page: ReactElement) => <HomeLayout>{page}</HomeLayout>);

  useEffect(() => {
    (window as any).clarity =
      (window as any).clarity ||
      function () {
        ((window as any).clarity.q = (window as any).clarity.q || []).push(arguments);
      };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.clarity.ms/tag/r9yhrrcdo8";

    document.head.appendChild(script);

    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);

  return getLayout(<Component {...pageProps} />);
}