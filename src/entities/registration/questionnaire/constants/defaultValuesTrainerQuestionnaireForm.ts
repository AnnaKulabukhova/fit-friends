import { Training } from '@entities/registration/models/training';
import { FieldsTrainerQuestionnaire } from '../trainer/fieldsTrainerQuestionnaire';
import { Agreements } from '@entities/registration/models/agreements';

export const defaultValuesTrainerQuestionnaireForm = {
  [FieldsTrainerQuestionnaire.Type]: {
    [Training.Yoga]: true,
    [Training.Running]: false,
    [Training.Power]: false,
    [Training.Aerobics]: false,
    [Training.Crossfit]: false,
    [Training.Box]: false,
    [Training.Pilates]: true,
    [Training.Stretching]: false,
  },
  [FieldsTrainerQuestionnaire.Level]: '',
  [FieldsTrainerQuestionnaire.Certificate]: undefined,
  [FieldsTrainerQuestionnaire.Experience]: '',
  [FieldsTrainerQuestionnaire.PersonalTraining]: {
    [Agreements.PersonalTraining]: true,
  },
};
