import React from 'react';
import { UserQuestionnaireForm } from '@features/UserQuestionnaireForm';
import title from '@shared/images/titleBlack.svg';
import logo from '@shared/images/iconLogin.svg';
import styles from './UserQuestionnaire.module.css';

export const UserQuestionnaire = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={title} className={styles.title} alt="Название сайта" />
        <img src={logo} className={styles.logo} alt="логотип сайта" />
        <UserQuestionnaireForm />
      </div>
    </div>
  );
};
