import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode | undefined;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Alejandro Medina" />
        <meta name="description" content="informacion sobre el pokemon XXX" />
        <meta name="keywords" content="pokemon, XXXX" />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};