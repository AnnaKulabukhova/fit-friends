import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { schema } from '@entities/registration/questionnaire/user/userQuestionnaireSchema';
import { Modal } from '@shared/ui/Modal';
import { Button } from '@shared/ui/Button';
import { level } from '@entities/registration/questionnaire/constants/level';
import { timeForTraining } from '@entities/registration/questionnaire/constants/timeForTraining';
import { ControlledRadioButton } from '@shared/ui/Controlled/ControlledRadioButton';
import { typeOfTraining } from '@entities/registration/questionnaire/constants/typeOfTraining';
import { GroupCheckbox } from '@shared/ui/Controlled/GroupCheckbox';
import { ControlledInput } from '@shared/ui/Controlled/ControlledInput';
import { FieldsUserQuestionnaire } from '@entities/registration/questionnaire/user/fieldsUserQuestionnaire';
import styles from './UserQuestionnaireForm.module.css';
import { convertDataForCheckboxFields } from '@shared/utils/convertDataForCheckboxFields';
import { defaultValuesUserQuestionnaireForm } from '@entities/registration/questionnaire/constants/defaultValuesUserQuestionnaireForm';

export const UserQuestionnaireForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValuesUserQuestionnaireForm,
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const convertDataOfTraining = convertDataForCheckboxFields(typeOfTraining);

  return (
    <div className={styles.modal}>
      <Modal>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <fieldset className={styles.block}>
              <legend className={`${styles.title} ${styles.titleButton}`}>
                Ваша специализация (тип) тренировок
              </legend>
              <GroupCheckbox
                variant="complex"
                stateOfList={FieldsUserQuestionnaire.Type}
                list={convertDataOfTraining}
              />
            </fieldset>

            <fieldset className={styles.block}>
              <legend className={`${styles.title} ${styles.titleButton}`}>
                Ваш уровень
              </legend>
              <ControlledRadioButton
                name={FieldsUserQuestionnaire.Time}
                list={timeForTraining}
                variant="simple"
              />
            </fieldset>

            <fieldset className={styles.block}>
              <legend className={`${styles.title} ${styles.titleButton}`}>
                Сколько времени вы готовы уделять на тренировку в день
              </legend>
              <ControlledRadioButton
                name={FieldsUserQuestionnaire.Level}
                list={level}
                variant="simple"
              />
            </fieldset>

            <div className={styles.inner}>
              <div className={styles.inputBlock}>
                <h2 className={`${styles.title} ${styles.titleInput}`}>
                  Сколько калорий хотите сбросить
                </h2>
                <div className={styles.input}>
                  <ControlledInput
                    type="text"
                    name={FieldsUserQuestionnaire.SpendCaloriesDaily}
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
                    name={FieldsUserQuestionnaire.SpendCaloriesTotal}
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
