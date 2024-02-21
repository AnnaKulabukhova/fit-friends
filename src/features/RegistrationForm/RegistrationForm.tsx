import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { schema } from '@entities/registration/generalInformation/registrationSchema';
import { Modal } from '@shared/ui/Modal';
import { Select } from '@shared/ui/Controlled/Select';
import { Button } from '@shared/ui/Button';
import addedPhoto from '@shared/images/emptyPhoto.svg';
import { genders } from '@entities/registration/generalInformation/constants/genders';
import { optionsLocation } from '@entities/registration/generalInformation/constants/optionsLocation';
import { roleList } from '@entities/registration/generalInformation/constants/roleList';
import { ControlledUploadFile } from '@shared/ui/Controlled/ControlledUploadFile';
import { ControlledRadioButton } from '@shared/ui/Controlled/ControlledRadioButton';
import { ControlledInput } from '@shared/ui/Controlled/ControlledInput';
import { GroupCheckbox } from '@shared/ui/Controlled/GroupCheckbox';
import { FieldRegistration } from '@entities/registration/generalInformation/fieldsRegistration';
import styles from './RegistrationForm.module.css';
import { userAgreement } from '@entities/registration/generalInformation/constants/agreement';
import { convertDataForCheckboxFields } from '@shared/utils/convertDataForCheckboxFields';
import { defaultValuesRegistrationForm } from '@entities/registration/generalInformation/constants/defaultValuesRegistrationForm';

export const RegistrationForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValuesRegistrationForm,
  });
  const navigate = useNavigate();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    const dateOfCreation = new Date();
    console.log('data', data);
    if (data) {
      if (data[FieldRegistration.Role] === 'trainer') {
        navigate('/trainer-questionnaire');
      }
      if (data[FieldRegistration.Role] === 'sportsman') {
        navigate('/user-questionnaire');
      }
    }
  });

  const convertDataOfUserAgreement = convertDataForCheckboxFields(userAgreement);

  return (
    <div className={styles.modal}>
      <Modal title="Регистрация">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className={styles.containerPhoto}>
              <ControlledUploadFile
                variant="prime"
                text="JPG, PNG, оптимальный размер 100х100 px"
                image={addedPhoto}
                title="Загрузите фото профиля"
                name={FieldRegistration.Photo}
              />
            </div>

            <div className={styles.inner}>
              <div className={styles.input}>
                <ControlledInput type="text" name={FieldRegistration.Name} label="Имя" />
              </div>

              <div className={styles.input}>
                <ControlledInput
                  type="email"
                  name={FieldRegistration.Email}
                  label="E-mail"
                />
              </div>

              <div className={styles.input}>
                <ControlledInput
                  type="date"
                  name={FieldRegistration.DateOfBirth}
                  label="Дата рождения"
                />
              </div>

              <div className={styles.input}>
                <span className={styles.label}>Ваша локация</span>
                <Select name={FieldRegistration.Location} options={optionsLocation} />
              </div>

              <div className={styles.input}>
                <ControlledInput
                  type="password"
                  name={FieldRegistration.Password}
                  label="Пароль"
                />
              </div>

              <fieldset className={styles.input}>
                <legend className={styles.label}>Пол</legend>
                <div className={styles.radioButtonBlock}>
                  <ControlledRadioButton
                    variant="simple"
                    name={FieldRegistration.Gender}
                    list={genders}
                  />
                </div>
              </fieldset>
            </div>

            <fieldset className={styles.input}>
              <legend className={styles.title}>Выберите роль</legend>
              <ControlledRadioButton
                variant="complex"
                list={roleList}
                name={FieldRegistration.Role}
              />
            </fieldset>

            <fieldset className={styles.input}>
              <GroupCheckbox
                stateOfList={FieldRegistration.UserAgreement}
                list={convertDataOfUserAgreement}
                variant="simple"
                style="smallFontSize"
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
