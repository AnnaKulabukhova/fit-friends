import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Некорректный адрес электронной почты')
    .required('Обязательное поле для заполнения'),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .max(12, 'Максимальная длина пароля 12 символов')
    .required('Обязательное поле для заполнения'),
});
