import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode | undefined;
  title?: string;
}

const origin = typeof window !== 'undefined' ? window.location.origin : '';

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Alejandro Medina" />
        <meta name="description" content="Escoge tú pokemon" />
        <meta name="keywords" content="pokemon" />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Pagina de información sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        <meta property="og:url" content={`${origin}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pokemon App" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="en_US" />
        // meta para facebook
        <meta property="fb:app_id" content="1234" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Pokemon App" />
        <meta
          property="og:image:secure_url"
          content={`${origin}/img/banner.png`}
        />
        // meta para twitter
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plainAlejandro" />
        <meta name="twitter:creator" content="@plainAlejandro" />
        <meta name="twitter:title" content={`Información sobre ${title}`} />
        <meta
          name="twitter:description"
          content={`Pagina de información sobre ${title}`}
        />
        <meta name="twitter:image" content={`${origin}/img/banner.png`} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:alt" content="Pokemon App" />
        <meta
          name="twitter:image:secure_url"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
