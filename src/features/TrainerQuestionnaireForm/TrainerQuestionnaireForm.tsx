import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from '@shared/ui/Modal';
import { ControlledRadioButton } from '@shared/ui/Controlled/ControlledRadioButton';
import { typeOfTraining } from '@entities/registration/questionnaire/constants/typeOfTraining';
import { level } from '@entities/registration/questionnaire/constants/level';
import { schema } from '@entities/registration/questionnaire/trainer/trainerQuestionnaireSchema';
import { GroupCheckbox } from '@shared/ui/Controlled/GroupCheckbox';
import { personalTraining } from '@entities/registration/questionnaire/constants/personalTraining';
import { Button } from '@shared/ui/Button';
import { Textarea } from '@shared/ui/Controlled/Textarea';
import { ControlledUploadFile } from '@shared/ui/Controlled/ControlledUploadFile';
import addedPhoto from '@shared/images/emptyPhotoMini.svg';
import { FieldsTrainerQuestionnaire } from '@entities/registration/questionnaire/trainer/fieldsTrainerQuestionnaire';
import styles from './TrainerQuestionnaireForm.module.css';
import { convertDataForCheckboxFields } from '@shared/utils/convertDataForCheckboxFields';
import { defaultValuesTrainerQuestionnaireForm } from '@entities/registration/questionnaire/constants/defaultValuesTrainerQuestionnaireForm';

export const TrainerQuestionnaireForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValuesTrainerQuestionnaireForm,
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
  });

  const convertDataOfTraining = convertDataForCheckboxFields(typeOfTraining);
  const convertDataOfPersonalTraining = convertDataForCheckboxFields(personalTraining);

  return (
    <div className={styles.modal}>
      <Modal>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <fieldset className={styles.block}>
              <legend className={styles.title}>
                Ваша специализация (тип) тренировок
              </legend>
              <GroupCheckbox
                stateOfList={FieldsTrainerQuestionnaire.Type}
                list={convertDataOfTraining}
                variant="complex"
              />
            </fieldset>

            <fieldset className={styles.block}>
              <legend className={styles.title}>Ваш уровень</legend>
              <ControlledRadioButton
                name={FieldsTrainerQuestionnaire.Level}
                list={level}
                variant="simple"
              />
            </fieldset>

            <div className={styles.block}>
              <span className={styles.title}>Ваши дипломы и сертификаты</span>
              <ControlledUploadFile
                variant="second"
                text="Загрузите сюда файлы формата PDF, JPG или PNG"
                image={addedPhoto}
                name={FieldsTrainerQuestionnaire.Certificate}
              />
            </div>

            <div className={styles.block}>
              <span className={styles.title}>
                Расскажите о своём опыте, который мы сможем проверить
              </span>
              <Textarea name={FieldsTrainerQuestionnaire.Experience} rows={5} />
            </div>

            <fieldset className={styles.block}>
              <GroupCheckbox
                stateOfList={FieldsTrainerQuestionnaire.PersonalTraining}
                list={convertDataOfPersonalTraining}
                variant="simple"
              />
            </fieldset>

            <div className={styles.button}>
              <Button variant="primary">Продолжить</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};
