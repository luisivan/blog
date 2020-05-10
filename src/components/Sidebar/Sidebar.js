// @flow strict
import React from 'react';
import Author from './Author';
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
        <iframe src="https://thoughtcrime.substack.com/embed" frameBorder="0" scrolling="no"
                style={{ width: '125%', maxWidth: 320, height: 115, marginLeft: '-2.5rem', transform: 'scale(0.8)' }}></iframe>
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
