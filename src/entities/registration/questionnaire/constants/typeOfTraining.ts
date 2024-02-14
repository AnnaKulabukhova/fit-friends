import { Training } from '../../models/training';

export const typeOfTraining = {
  [Training.Yoga]: {
    label: 'Йога',
  },
  [Training.Running]: {
    label: 'Бег',
  },
  [Training.Power]: {
    label: 'Силовые',
  },
  [Training.Aerobics]: {
    label: 'Аэробика',
  },
  [Training.Crossfit]: {
    label: 'Кроссфит',
  },
  [Training.Box]: {
    label: 'Бокс',
  },
  [Training.Pilates]: {
    label: 'Пилатес',
  },
  [Training.Stretching]: {
    label: 'Стрейчинг',
  },
};
