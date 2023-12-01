import * as yup from 'yup';
export const schema = yup.object().shape({
  type: yup
    .array()
    .of(yup.string())
    .min(1, 'Поле обязательное для заполнения')
    .max(3, 'Может быть выбрано не больше трёх направлений')
    .required('Поле обязательное для заполнения'),

  level: yup.string().required('Поле обязательное для заполнения'),

  certificate: yup
    .mixed()
    .test('required', 'Загрузите ваши сертификаты', (value) => {
      return value && value['length'];
    })
    .test('type', 'Файл должен быть в формате pdf', (value) => {
      return value && value[0] && value[0].type === 'application/pdf';
    }),

  experience: yup
    .string()
    .min(10, 'Минимальная длина текста 10 знаков')
    .max(140, 'Текст не должен превышать 140 знаков'),

  personalTraining: yup.array().of(yup.string()),
});
