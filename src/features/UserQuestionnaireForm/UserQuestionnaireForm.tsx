import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { schema } from '../../entities/questionnaire/user/userQuestionnaireSchema';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';
import { level } from '../../entities/questionnaire/constants/level';
import { timeForTraining } from '../../entities/questionnaire/constants/timeForTraining';
import { RadioButtonWrapperFirstVariant } from '../../shared/ui/RadioButtonWrapperFirstVariant';
import styles from './UserQuestionnaireForm.module.css';
import { typeOfTraining } from '../../entities/questionnaire/constants/typOfTraining';
import { CheckboxWrapperSecondVariant } from '../../shared/ui/CheckboxWrapperSecondVariant';
import { ControlledInput } from '../../shared/ui/ControlledInput';

export const UserQuestionnaireForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: [],
      time: '',
      level: '',
      spendCaloriesDaily: 0,
      spendCaloriesTotal: 0,
    },
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log('type', watch('type'));
  // console.log('userAgreement', watch('userAgreement'));
  return (
    <div className={styles.modal}>
      <Modal>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <fieldset className={styles.block}>
              <legend className={`${styles.title} ${styles.titleButton}`}>
                Ваша специализация (тип) тренировок
              </legend>
              <CheckboxWrapperSecondVariant name="type" list={typeOfTraining} />
            </fieldset>

            <fieldset className={styles.block}>
              <legend className={`${styles.title} ${styles.titleButton}`}>
                Ваш уровень
              </legend>
              <RadioButtonWrapperFirstVariant
                name="level"
                list={timeForTraining}
              />
            </fieldset>

            <fieldset className={styles.block}>
              <legend className={`${styles.title} ${styles.titleButton}`}>
                Сколько времени вы готовы уделять на тренировку в день
              </legend>
              <RadioButtonWrapperFirstVariant name="time" list={level} />
            </fieldset>

            <div className={styles.inner}>
              <div className={styles.inputBlock}>
                <h2 className={`${styles.title} ${styles.titleInput}`}>
                  Сколько калорий хотите сбросить
                </h2>
                <div className={styles.input}>
                  <ControlledInput
                    type="text"
                    name="spendCaloriesDaily"
                    text="ккал"
                  />
                </div>
              </div>

              <div className={styles.inputBlock}>
                <h2 className={`${styles.title} ${styles.titleInput}`}>
                  Сколько калорий тратить в день
                </h2>
                <div className={styles.input}>
                  <ControlledInput
                    type="text"
                    name="spendCaloriesTotal"
                    text="ккал"
                  />
                </div>
              </div>
            </div>

            <div className={styles.button}>
              <Button variant="primary">Продолжить</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};
