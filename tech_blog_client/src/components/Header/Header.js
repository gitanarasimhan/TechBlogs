import React from 'react';
import PropTypes from 'prop-types';

import Button, { TYPES as BUTTON_TYPES } from '../Button';

import DownChevronLight from '../../assets/icons/down-chevron-light.svg';

import styles from './header.module.scss';

const Header = ({ onScrollClick }) => (
  <header id="header">
    <nav role="navigation">
    </nav>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>TECH BLOGS</h1>
    </div>
  </header>
);

export default Header;
