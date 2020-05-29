import { add, divide, concatenation } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
describe('concat',()=>{
  it('should concat my name abhi plus lash',()=>{
    const result = concatenation('abhi','lash');
    expect(result).to.equal("abhilash");
  })
  it('should concat one empty string with another non empty string',()=>{
    const result= concatenation('abhi','')
    expect(result).to.equal('abhi')
  });
  it('throw error when both string to be concatenated are empty',()=>{
    expect(()=>{concatenation('','')}).to.throw('empty parameter strings');
    })
  })

