const assert = require('assert');
const session = require('../lib/session');

describe('session', () => {
  it('"session" is a function', () => {
    const mySession = session({
      secret: 'aaa',
      resave: false,
      saveUninitialized: false,
    });
    assert(typeof mySession === 'function');
  });

  it('"login" is a function of "session" (prototype)', () => assert(typeof session.Session.prototype.login === 'function'));
  it('"isLoggedIn" is a function of "session" (prototype)', () => assert(typeof session.Session.prototype.isLoggedIn === 'function'));
  it('"isGuest" is a function of "session" (prototype)', () => assert(typeof session.Session.prototype.isGuest === 'function'));
  it('"isFresh" is a function of "session" (prototype)', () => assert(typeof session.Session.prototype.isFresh === 'function'));
  it('"saveAsync" is a function of "session" (prototype)', () => assert(typeof session.Session.prototype.saveAsync === 'function'));
  it('"reloadAsync" is a function of "session" (prototype)', () => assert(typeof session.Session.prototype.reloadAsync === 'function'));
});
