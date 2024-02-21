import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@entities/login/loginSchema';
import { ControlledInput } from '@shared/ui/Controlled/ControlledInput';
import { Modal } from '@shared/ui/Modal';
import { Button } from '@shared/ui/Button';
import { FieldsLogin } from '@entities/login/fieldsLogin';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const methods = useForm({
    defaultValues: {
      [FieldsLogin.Email]: '',
      [FieldsLogin.Password]: '',
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={styles.modal}>
      <Modal title="Вход">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className={styles.input}>
              <ControlledInput type="email" name={FieldsLogin.Email} label="E-mail" />
            </div>
            <div className={styles.input}>
              <ControlledInput
                type="password"
                name={FieldsLogin.Password}
                label="Пароль"
              />
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
