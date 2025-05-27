import Head from "next/head";
import React from "react";
import { prodUrl } from "~/constants/app-info";

const defaultTitle = "Ritu Gaur - UI/UX Designer";
const defaultDescription = "Portfolio of Ritu Gaur - UI/UX & Branding";
const defaultImage = "/og-image.png";
const Metatags = ({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <Head>
      <title>{title ?? defaultTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      <link rel="icon" href="/favicon.ico" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={prodUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
      />
      <meta property="og:image" content={image ?? defaultImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={prodUrl} />
      <meta property="twitter:url" content={prodUrl} />
      <meta name="twitter:title" content={title ?? defaultTitle} />
      <meta
        name="twitter:description"
        content={description ?? defaultDescription}
      />
      <meta name="twitter:image" content={image ?? defaultImage} />

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta> */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="yandexbot" content="index, follow" />
      <meta name="sitemap" content={`${prodUrl}/sitemap.xml`} />
      <meta name="google-site-verification" content="google-site-verification=google-site-verification" />
      <meta name="google-site-verification" content="google-site-verification" />
    </Head>
  );
};

export default Metatags;
