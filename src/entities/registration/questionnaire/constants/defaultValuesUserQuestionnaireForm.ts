import { Training } from '@entities/registration/models/training';
import { FieldsUserQuestionnaire } from '../user/fieldsUserQuestionnaire';

export const defaultValuesUserQuestionnaireForm = {
  [FieldsUserQuestionnaire.Type]: {
    [Training.Yoga]: true,
    [Training.Running]: false,
    [Training.Power]: false,
    [Training.Aerobics]: false,
    [Training.Crossfit]: false,
    [Training.Box]: false,
    [Training.Pilates]: true,
    [Training.Stretching]: false,
  },
  [FieldsUserQuestionnaire.Time]: '',
  [FieldsUserQuestionnaire.Level]: '',
  [FieldsUserQuestionnaire.SpendCaloriesDaily]: 0,
  [FieldsUserQuestionnaire.SpendCaloriesTotal]: 0,
};
