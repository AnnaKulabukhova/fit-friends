import * as yup from 'yup';

export const schema = yup.object().shape({
  photo: yup
    .mixed()
    .test('required', 'Загрузите вашу фотографию', (value) => {
      return value && value['length'];
    })
    .test('type', 'Изображение должно быть в формате jpg или png', (value) => {
      return (
        value &&
        value[0].type &&
        (value[0].type === 'image/jpg' ||
          value[0].type === 'image/png' ||
          value[0].type === 'image/jpeg')
      );
    })
    .test('fileSize', 'Этот файл слишком большой', (value) => {
      return value && value[0].size && value[0].size <= 1000000;
    }),

  name: yup
    .string()
    .min(1, 'Минимальная длина 1 символ')
    .max(15, 'Максимальная длина 15 символов')
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      'Имя должно содержать только буквы русского или английского алфавита'
    )
    .required('Поле обязательное для заполнения'),

  email: yup.string().required('Поле обязательное для заполнения'),

  dateOfBirth: yup.date().required('Поле обязательное для заполнения'),

  location: yup.string().required('Поле обязательное для заполнения'),

  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .max(12, 'Максимальная длина пароля 12 символов')
    .required('Поле обязательное для заполнения'),

  gender: yup.string().required('Поле обязательное для заполнения'),

  role: yup.string().required('Поле обязательное для заполнения'),
  userAgreement: yup
    .array()
    .of(yup.string())
    .min(1, 'Поле обязательное для заполнения')
    .required('Поле обязательное для заполнения'),

  abc: yup.boolean(),
});
