export default {
  count: num => {
    let res = '';

    if (num === 1) {
      res = 'I';
    }

    if (num === 2) {
      res = 'II';
    }

    return res;
  },
};
