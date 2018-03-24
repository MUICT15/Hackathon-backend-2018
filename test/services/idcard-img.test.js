const assert = require('assert');
const app = require('../../src/app');

describe('\'idcard-img\' service', () => {
  it('registered the service', () => {
    const service = app.service('idcard-img');

    assert.ok(service, 'Registered the service');
  });
});
