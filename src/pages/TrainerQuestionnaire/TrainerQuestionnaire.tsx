import React from 'react';
import { TrainerQuestionnaireWrapper } from '@widgets/TrainerQuestionnaireWrapper';
import title from '@shared/images/titleBlack.svg';
import logo from '@shared/images/iconLogin.svg';
import styles from './TrainerQuestionnaire.module.css';

export const TrainerQuestionnaire = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={title} className={styles.title} alt="Название сайта" />
        <img src={logo} className={styles.logo} alt="логотип сайта" />
        <TrainerQuestionnaireWrapper />
      </div>
    </div>
  );
};
