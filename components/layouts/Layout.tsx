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
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
