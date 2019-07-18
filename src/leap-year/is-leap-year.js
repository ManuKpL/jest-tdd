import multipleChecker from './multiple-checker';

export default year => {
  const isMultipleOf = multipleChecker(year);
  const validMultiple = isMultipleOf(100) ? 400 : 4;

  return isMultipleOf(validMultiple);
};
