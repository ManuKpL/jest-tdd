import { should } from 'chai';
import RomanNumerals from '../RomanNumerals';

should();

describe('Roman numerals', () => {
  test('when 1 then returns I', () => {
    RomanNumerals.count(1).should.equal('I');
  });

  test('when 2 then returns I', () => {
    RomanNumerals.count(2).should.equal('II');
  });
});
