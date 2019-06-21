'use strict';

// const logger = require('../logger.js');

describe('should return true', () => {
  it('should pass a test', () => {
    expect(true).toBe(true);
  });
});

// describe('log save function', () => {
//   it('should take in a message and console.log it', () => {
//     let test = {
//       name: 'saved',
//       data: `SAVED: event just happened!`,
//     };
//     let spy = jest.spyOn(console, 'log');
//     logger.logSave(JSON.stringify(test));
//     expect(spy).toHaveBeenCalled();
//     spy.mockRestore();
//   });
// });

// describe('log error function', () => {
//   it('should take in a message and console.error it', () => {
//     let test = {
//       name: 'error',
//       data: `ERROR: event just happened!`,
//     };
//     let spy = jest.spyOn(console, 'error');
//     logger.logError(JSON.stringify(test));
//     expect(spy).toHaveBeenCalled();
//     spy.mockRestore();
//   });
// });

