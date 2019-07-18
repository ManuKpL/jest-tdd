import { should } from 'chai';
import FizzBuzz, { FIZZ, BUZZ } from '../FizzBuzz';

should();

describe('FizzBuzz', () => {
  test('when provided with a number then returns the stringified number', () => {
    FizzBuzz.say(1).should.equal('1');
    FizzBuzz.say(2).should.equal('2');
    FizzBuzz.say(4).should.equal('4');
    FizzBuzz.say(28).should.equal('28');
  });

  test('when provided with a multiple of 3 then returns Fizz', () => {
    FizzBuzz.say(3).should.equal(FIZZ);
    FizzBuzz.say(6).should.equal(FIZZ);
    FizzBuzz.say(9).should.equal(FIZZ);
  });

  test('when provided with a multiple of 5 then returns Buzz', () => {
    FizzBuzz.say(5).should.equal(BUZZ);
    FizzBuzz.say(10).should.equal(BUZZ);
  });

  test('when provided with a multiple of 3 & 5 then returns FizzBuzz', () => {
    FizzBuzz.say(15).should.equal(FIZZ + BUZZ);
    FizzBuzz.say(30).should.equal(FIZZ + BUZZ);
  });
});
