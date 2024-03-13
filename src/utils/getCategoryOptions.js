export const getCategoriesOptions = (categories) => {
  return categories.map((category) => ({
    value: category.strCategory,
    label: category.strCategory,
  }));
};
