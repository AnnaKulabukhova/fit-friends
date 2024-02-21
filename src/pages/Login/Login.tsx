import React from 'react';
import { LoginForm } from '@features/LoginForm';
import title from '@shared/images/titleBlack.svg';
import logo from '@shared/images/iconLogin.svg';
import styles from './Login.module.css';

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={title} className={styles.title} alt="Название сайта" />
        <img src={logo} className={styles.logo} alt="логотип сайта" />
      </div>
      <LoginForm />
    </div>
  );
};
