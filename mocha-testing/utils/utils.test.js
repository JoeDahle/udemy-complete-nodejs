const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  })

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  })

  it('should square a number', () => {
    let res = utils.square(8);

    expect(res).toBe(64).toBeA('number');
  })

  it('should expect some values', () => {
    // expect(12).toNotBe(12);
    expect({name: 'Joe'}).toEqual({name: 'Joe'});
  });
})
