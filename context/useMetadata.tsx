import React, { ReactNode } from "react";
import Head from "next/head";


// Metadata type
export type IMetadata = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  creator?: string;
  site_name?: string;
  type?: string;
  url?: string;
  favicon?: string;
  twitterCard?: string;
};

type MetadataProviderProps = {
  children: ReactNode;
  newMetadata?: IMetadata; // You can pass new metadata to override default
};

// Default metadata to use when no metadata is passed
const defaultMetadata: IMetadata = {
  title: "Owen's Portfolio",
  description: "A preview of all the projects I've worked on.",
  keywords:
    "portfolio, web development, frontend, web3, blockchain, decentralized applications",
  image: "https://res.cloudinary.com/dewnu3vpt/image/upload/v1740482550/preview_sobapr.png" + "?v=" + new Date().getTime(),
  creator: "@Ngunjiri",
  site_name: "Ngunjiri's Portfolio",
  type: "website",
  url: "https://ngunjiri.vercel.app/",
  favicon: "/logo.png",
  twitterCard: "summary",
};

/**
 * MetadataProvider component is a React functional component that provides metadata
 * for the application. It uses the Head component to set various meta tags for SEO,
 * Open Graph, and Twitter. It also includes Google Analytics script for tracking.
 *
 * @param MetadataProviderProps props - The props for the MetadataProvider component.
 * @param React.ReactNode props.children - The child components to be rendered within the provider.
 * @param object props.newMetadata - The new metadata to be merged with the default metadata.
 *
 * @returns JSX.ElementThe MetadataProvider component with meta tags and Google Analytics script.
 */
const MetadataProvider: React.FC<MetadataProviderProps> = ({
  children,
  newMetadata,
}) => {
  const metadata = { ...defaultMetadata, ...newMetadata };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=320, initial-scale=1" />
        <link rel="icon" href={metadata.favicon} />
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:site_name" content={metadata.site_name} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:site" content={metadata.creator} />
        <meta name="twitter:creator" content={metadata.creator} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

      </Head>
      {children}
    </>
  );
};

export default MetadataProvider;
