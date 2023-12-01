import React from 'react';
import { RegistrationForm } from '../../features/RegistrationForma';
import title from '../../shared/images/titleBlack.svg';
import logo from '../../shared/images/iconLogin.svg';
import styles from './Registration.module.css';

export const Registration = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={title} className={styles.title} alt="Название сайта" />
        <img src={logo} className={styles.logo} alt="логотип сайта" />
        <RegistrationForm />
      </div>
    </div>
  );
};
