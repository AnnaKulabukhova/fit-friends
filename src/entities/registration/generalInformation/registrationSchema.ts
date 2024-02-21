import * as yup from 'yup';
import { FieldRegistration } from './fieldsRegistration';
import { Agreements } from '../models/agreements';

export const schema = yup.object().shape({
  [FieldRegistration.Photo]: yup
    .mixed<FileList>()
    .test('required', 'Загрузите вашу фотографию', (value) => Boolean(value?.length))
    .test('type', 'Изображение должно быть в формате jpg или png', (value) => {
      const imageTypes = new Set(['image/jpg', 'image/jpeg', 'image/png']);
      const { type } = value?.[0] || {};
      return Boolean(type && imageTypes.has(type));
    })
    .test('fileSize', 'Этот файл слишком большой', (value) => {
      return Boolean(value && value[0] && value[0].size <= 1000000);
    }),

  [FieldRegistration.Name]: yup
    .string()
    .min(1, 'Минимальная длина 1 символ')
    .max(15, 'Максимальная длина 15 символов')
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      'Имя должно содержать только буквы русского или английского алфавита',
    )
    .required('Поле обязательное для заполнения'),

  [FieldRegistration.Email]: yup
    .string()
    .email('Некорректный адрес электронной почты')
    .required('Поле обязательное для заполнения'),

  [FieldRegistration.DateOfBirth]: yup
    .string()
    .required('Поле обязательное для заполнения'),

  [FieldRegistration.Location]: yup.string().required('Поле обязательное для заполнения'),

  [FieldRegistration.Password]: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .max(12, 'Максимальная длина пароля 12 символов')
    .required('Поле обязательное для заполнения'),

  [FieldRegistration.Gender]: yup.string().required('Поле обязательное для заполнения'),

  [FieldRegistration.Role]: yup.string().required('Поле обязательное для заполнения'),
  [FieldRegistration.UserAgreement]: yup
    .object({ [Agreements.UserAgreement]: yup.boolean() })
    .test('min', 'Поле обязательное для заполнения', (value) => {
      let count = 0;
      Object.values(value).forEach((el) => (el ? count++ : count));
      return Boolean(count > 0);
    })
    .required('Поле обязательное для заполнения'),
});
