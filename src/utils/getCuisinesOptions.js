export const getCuisinesOptions = (cuisines) => {
  return cuisines.map((cuisines) => ({
    value: cuisines.strArea,
    label: cuisines.strArea,
  }));
};
