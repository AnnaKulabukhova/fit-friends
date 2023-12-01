import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useForm,
  FormProvider,
  // useController,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../entities/registration/registrationSchema';
import { Modal } from '../../shared/ui/Modal';
import { Select } from '../../shared/ui/Select';
import { Button } from '../../shared/ui/Button';
import addedPhoto from '../../shared/images/emptyPhoto.svg';
import { genders } from '../../entities/registration/constants/genders';
import { optionsLocation } from '../../entities/registration/constants/optionsLocation';
import { roleList } from '../../entities/registration/constants/roleList';
import { UploadPhoto } from '../../shared/ui/UploadPhoto';
import { RadioButtonWrapperFirstVariant } from '../../shared/ui/RadioButtonWrapperFirstVariant';
import { CheckboxWrapper } from '../../shared/ui/CheckboxWrapper';
import { ControlledInput } from '../../shared/ui/ControlledInput';
import styles from './RegistrationForm.module.css';
import { RadioButtonWrapperSecondVariant } from '../../shared/ui/RadioButtonWrapperSecondVariant';
import { agreement } from '../../entities/registration/constants/agreement';
import { Toggle } from '../../shared/ui/Toggle';
// import { redirect } from 'react-router-dom';

export const RegistrationForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      photo: '',
      name: '',
      email: '',
      location: '',
      password: '',
      gender: '',
      role: '',
      userAgreement: [],
      abc: false,
    },
  });
  const navigate = useNavigate();

  const { handleSubmit, watch } = methods;

  const onSubmit = handleSubmit((data) => {
    if (data) {
      console.log(data);
      if (data['role'] === 'trainer') {
        navigate('/trainerQuestionnaire');
      }
      if (data['role'] === 'sportsman') {
        navigate('/userQuestionnaire');
      }

      const dateOfCreation = new Date();
      console.log(dateOfCreation);
    }
  });

  console.log('abc', watch('abc'));

  // console.log('dateOfBirth', watch('dateOfBirth'));

  // const {
  //   field: { onChange, name, value },
  //   fieldState: { error },
  // } = useController({
  //   control,
  //   name: 'userAgreement',
  // });

  return (
    <div className={styles.modal}>
      <Modal title="Регистрация">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className={styles.containerPhoto}>
              <UploadPhoto
                text="JPG, PNG, оптимальный размер 100х100 px"
                image={addedPhoto}
                title="Загрузите фото профиля"
                name="photo"
              />
            </div>

            <div className={styles.inner}>
              <div className={styles.input}>
                <ControlledInput type="text" name="name" label="Имя" />
              </div>

              <div className={styles.input}>
                <ControlledInput type="email" name="email" label="E-mail" />
              </div>

              <div className={styles.input}>
                <ControlledInput
                  type="date"
                  name="dateOfBirth"
                  label="Дата рождения"
                />
              </div>

              <div className={styles.input}>
                <span className={styles.label}>Ваша локация</span>
                <Select name="location" options={optionsLocation} />
              </div>

              <div className={styles.input}>
                <ControlledInput
                  type="password"
                  name="password"
                  label="Пароль"
                />
              </div>

              <fieldset className={styles.input}>
                <legend className={styles.label}>Пол</legend>
                <div className={styles.radioButtonBlock}>
                  <RadioButtonWrapperFirstVariant
                    name="gender"
                    list={genders}
                  />
                </div>
              </fieldset>
            </div>

            <fieldset className={styles.input}>
              <legend className={styles.title}>Выберите роль</legend>
              <RadioButtonWrapperSecondVariant list={roleList} name="role" />
            </fieldset>

            <fieldset className={styles.input}>
              {/* <div>
                <label className={styles.label}>
                  <input
                    name={name}
                    type="checkbox"
                    onChange={onChange}
                    value={value}
                    className={styles.inputss}
                  />
                  <div className={styles.buttonContainer}></div>
                  <span className={styles.labelText}>
                    Я соглашаюсь с <span>политикой конфиденциальности</span>{' '}
                    компании
                  </span>
                </label>
                {error && <p className={styles.errorText}>{error.message}</p>}
              </div> */}

              <CheckboxWrapper name="userAgreement" title="" list={agreement} />
            </fieldset>

            <Toggle name="abc" />
            <div className={styles.button}>
              <Button variant="primary">Продолжить</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};
