export const getGender = (g: string): string => {
  switch (g) {
    case 'male':
      return 'Мужской';
    case 'female':
      return 'Женский';
    case 'other':
      return 'Другой';
    default:
      return '';
  }
};
