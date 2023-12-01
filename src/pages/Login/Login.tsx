import React from 'react';
import styles from './Login.module.css';
import title from '../../shared/images/titleBlack.svg';
import logo from '../../shared/images/iconLogin.svg';
import { LoginForm } from '../../features/LoginForm';

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
