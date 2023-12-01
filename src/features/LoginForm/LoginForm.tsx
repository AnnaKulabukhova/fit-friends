import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../entities/login/loginSchema';
import { ControlledInput } from '../../shared/ui/ControlledInput';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const methods = useForm({
    defaultValues: { email: '', password: '' },
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
              <ControlledInput type="email" name="email" label="E-mail" />
            </div>
            <div className={styles.input}>
              <ControlledInput type="password" name="password" label="Пароль" />
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
