import * as yup from 'yup';
import { FieldsTrainerQuestionnaire } from './fieldsTrainerQuestionnaire';
import { Training } from '@entities/registration/models/training';
import { Agreements } from '@entities/registration/models/agreements';

export const schema = yup.object().shape({
  [FieldsTrainerQuestionnaire.Type]: yup.lazy(() => {
    return yup
      .object(
        Object.values(Training).reduce((acc, curr) => {
          acc[curr] = yup.boolean();
          return acc;
        }, {} as Record<Training, yup.BooleanSchema>),
      )
      .test('min', 'Поле обязательное для заполнения', (value) => {
        let count = 0;
        Object.values(value).forEach((el) => (el ? count++ : count));
        return Boolean(count > 0);
      })
      .test('max', 'Может быть выбрано не больше трёх направлений', (value) => {
        let count = 0;
        Object.values(value).forEach((el) => (el ? count++ : count));
        return Boolean(count < 4);
      })
      .required('Поле обязательное для заполнения');
  }),

  [FieldsTrainerQuestionnaire.Level]: yup
    .string()
    .required('Поле обязательное для заполнения'),

  [FieldsTrainerQuestionnaire.Certificate]: yup
    .mixed<FileList>()
    .test('required', 'Загрузите ваши сертификаты', (value) => {
      return Boolean(value?.length);
    })
    .test('type', 'Файл должен быть в формате pdf', (value) => {
      return Boolean(value && value[0] && value[0].type === 'application/pdf');
    }),

  [FieldsTrainerQuestionnaire.Experience]: yup
    .string()
    .min(10, 'Минимальная длина текста 10 знаков')
    .max(140, 'Текст не должен превышать 140 знаков'),

  [FieldsTrainerQuestionnaire.PersonalTraining]: yup.object({
    [Agreements.PersonalTraining]: yup.boolean(),
  }),
});
