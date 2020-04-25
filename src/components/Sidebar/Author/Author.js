// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    homeBio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <a
      className={styles['author__bio-twitter']}
      href={getContactHref('twitter', author.contacts.twitter)}
      rel="noopener noreferrer"
      target="_blank"
      style={{ display: 'flex', alignItems: 'center', marginLeft: -4 }}
    >
      <Icon name='twitter' icon={getIcon('twitter')} /> @licuende
    </a>
    <p className={styles['author__subtitle']} dangerouslySetInnerHTML={{__html: author.homeBio}} />
  </div>
);

export default Author;
