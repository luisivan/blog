// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';
const siteConfig = require('../../../config.js');

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  image?: string
};

const Layout = ({ children, title, description, image }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://luisivan.net/posts/processing-reads/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteConfig.url}${image}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://luisivan.net/posts/processing-reads/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {image &&
        <meta property="twitter:image" content={`${siteConfig.url}${image}`} />
      }
    </Helmet>
    {children}
  </div>
);

export default Layout;
