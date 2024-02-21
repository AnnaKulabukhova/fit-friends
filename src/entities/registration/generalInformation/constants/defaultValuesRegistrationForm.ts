import { Agreements } from '@entities/registration/models/agreements';
import { FieldRegistration } from '../fieldsRegistration';

export const defaultValuesRegistrationForm = {
  [FieldRegistration.Photo]: undefined,
  [FieldRegistration.Name]: '',
  [FieldRegistration.Email]: '',
  [FieldRegistration.DateOfBirth]: '',
  [FieldRegistration.Location]: '',
  [FieldRegistration.Password]: '',
  [FieldRegistration.Gender]: '',
  [FieldRegistration.Role]: '',
  [FieldRegistration.UserAgreement]: {
    [Agreements.UserAgreement]: true,
  },
};
