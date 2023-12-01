import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal } from '../../shared/ui/Modal';
import { RadioButtonWrapperFirstVariant } from '../../shared/ui/RadioButtonWrapperFirstVariant';
import { CheckboxWrapperSecondVariant } from '../../shared/ui/CheckboxWrapperSecondVariant';
import { typeOfTraining } from '../../entities/questionnaire/constants/typOfTraining';
import styles from './TrainerQuestionnaireForm.module.css';
import { timeForTraining } from '../../entities/questionnaire/constants/timeForTraining';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../entities/questionnaire/trainer/trainerQuestionnaireSchema';
import { CheckboxWrapper } from '../../shared/ui/CheckboxWrapper';
import { personalTraining } from '../../entities/questionnaire/constants/personalTraining';
import { Button } from '../../shared/ui/Button';
import { Textarea } from '../../shared/ui/Textarea';
import { UploadPhoto } from '../../shared/ui/UploadPhoto';
import addedPhoto from '../../shared/images/emptyPhoto.svg';

export const TrainerQuestionnaireForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: [],
      level: '',
      certificate: '',
      experience: '',
      personalTraining: [],
    },
  });

  const { handleSubmit, watch } = methods;
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log('certificate', watch('certificate'));

  return (
    <div className={styles.modal}>
      <Modal>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <fieldset className={styles.block}>
              <legend className={styles.title}>
                Ваша специализация (тип) тренировок
              </legend>
              <CheckboxWrapperSecondVariant name="type" list={typeOfTraining} />
            </fieldset>

            <fieldset className={styles.block}>
              <legend className={styles.title}>Ваш уровень</legend>
              <RadioButtonWrapperFirstVariant
                name="level"
                list={timeForTraining}
              />
            </fieldset>

            <div className={styles.block}>
              <span className={styles.title}>Ваши дипломы и сертификаты</span>
              <UploadPhoto
                text="JPG, PNG, оптимальный размер 100х100 px"
                image={addedPhoto}
                title="Загрузите фото профиля"
                name="certificate"
              />
            </div>

            <div className={styles.block}>
              <span className={styles.title}>
                Расскажите о своём опыте, который мы сможем проверить{' '}
              </span>
              <Textarea name="experience" rows={5} />
            </div>

            <fieldset className={styles.block}>
              <CheckboxWrapper
                name="personalTraining"
                list={personalTraining}
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
