import React from 'react';
import { Link } from '@shared/ui/Link';
import icon from '@shared/images/icon.svg';
import title from '@shared/images/titleLogoWhite.png';
import backgroundImg from '@shared/images/runningWomanBW.png';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={icon} alt="Логотип сайта" />
      </div>
      <img
        src={backgroundImg}
        className={styles.backgroundImg}
        alt="Бегущая девушка на фоне"
      />
      <main className={styles.container}>
        <img src={title} className={styles.title} alt="Название сайта" />
        <div className={styles.loginBox}>
          <div className={styles.loginButton}>
            <Link path="/registration" variant="primary">
              Регистрация
            </Link>
          </div>
          <div className={styles.loginText}>Есть аккаунт? </div>
          <span className={`${styles.loginText} ${styles.loginLink}`}>
            <Link path="/login" variant="simple">
              Вход
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
};
