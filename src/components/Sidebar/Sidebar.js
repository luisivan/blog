// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <iframe src="https://thoughtcrime.substack.com/embed" width="100%" height="120" frameborder="0" scrolling="no" style={{ margin: -12 }}></iframe>
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
