import isMultipleOf from './is-multiple-of';

const isMultipleOfThree = isMultipleOf(3);
const isMultipleOfFive = isMultipleOf(5);

export const FIZZ = 'fizz';
export const BUZZ = 'buzz';

export default {
  say: val => {
    let result = '';

    if (isMultipleOfThree(val)) {
      result += FIZZ;
    }

    if (isMultipleOfFive(val)) {
      result += BUZZ;
    }

    if (!result) {
      result += val;
    }

    return result;
  },
};
