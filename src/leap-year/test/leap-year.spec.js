import { should } from 'chai';
import isLeapYear from '../is-leap-year';

should();

/* eslint-disable no-unused-expressions */

describe('Leap year', () => {
  test('when multiple of 4 then returns true', () => {
    isLeapYear(1996).should.be.true;
    isLeapYear(1992).should.be.true;
    isLeapYear(1988).should.be.true;
  });

  test('when not multiple of 4 then returns false', () => {
    isLeapYear(1997).should.be.false;
    isLeapYear(1993).should.be.false;
    isLeapYear(1989).should.be.false;
  });

  test('when multiple of 400 then returns true', () => {
    isLeapYear(1600).should.be.true;
    isLeapYear(1200).should.be.true;
    isLeapYear(800).should.be.true;
  });

  test('when multiple of 4 & 100 but not 400 then returns false', () => {
    isLeapYear(1800).should.be.false;
    isLeapYear(1400).should.be.false;
    isLeapYear(1000).should.be.false;
  });
});
