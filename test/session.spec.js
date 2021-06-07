const assert = require('assert');

describe('session', () => {
  it('Check the type', () => {
    const session = require('../lib/session')({
      secret: 'aaa',
      name: 'name', // <-- a less generic name for the session id
      resave: false,
      saveUninitialized: false,
    });
    assert(typeof session === 'function');
  });
});
