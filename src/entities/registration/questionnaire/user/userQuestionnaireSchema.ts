import * as yup from 'yup';
import { FieldsUserQuestionnaire } from './fieldsUserQuestionnaire';
import { Training } from '@entities/registration/models/training';

export const schema = yup.object().shape({
  [FieldsUserQuestionnaire.Type]: yup
    .object({
      [Training.Yoga]: yup.boolean(),
      [Training.Running]: yup.boolean(),
      [Training.Power]: yup.boolean(),
      [Training.Aerobics]: yup.boolean(),
      [Training.Crossfit]: yup.boolean(),
      [Training.Box]: yup.boolean(),
      [Training.Pilates]: yup.boolean(),
      [Training.Stretching]: yup.boolean(),
    })
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
    .required('Поле обязательное для заполнения'),

  [FieldsUserQuestionnaire.Time]: yup
    .string()
    .required('Поле обязательное для заполнения'),
  [FieldsUserQuestionnaire.Level]: yup
    .string()
    .required('Поле обязательное для заполнения'),

  [FieldsUserQuestionnaire.SpendCaloriesDaily]: yup
    .number()
    .typeError('Значение должно быть целым числом')
    .min(1000, '1000ккал - минимальное количество калорий, которые можно потратить')
    .max(5000, '5000ккал - максимальное количество калорий, которые можно потратить')
    .integer('Значение может быть только целым числом')
    .required('Поле обязательное для заполнения'),

  [FieldsUserQuestionnaire.SpendCaloriesTotal]: yup
    .number()
    .typeError('Значение должно быть целым числом')
    .min(1000, '1000ккал - минимальное количество калорий, которые можно потратить')
    .max(5000, '5000ккал - максимальное количество калорий, которые можно потратить')
    .integer('Значение может быть только целым числом')
    .required('Поле обязательное для заполнения'),
});
