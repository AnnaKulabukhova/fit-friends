export const convertDataForCheckboxFields = <T extends string>(
  fields: Record<T, { label: string }>,
) => {
  const typesArray = Object.entries(fields).reduce<Array<{ name: T; label: string }>>(
    (acc, [key, value]) => {
      const currentItem = {
        name: key as T,
        label: (value as { label: string }).label,
      };
      acc.push(currentItem);
      return acc;
    },
    [],
  );
  return typesArray;
};
