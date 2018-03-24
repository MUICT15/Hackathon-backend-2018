const assert = require('assert');
const app = require('../../src/app');

describe('\'mathching-freelancer\' service', () => {
  it('registered the service', () => {
    const service = app.service('mathching-freelancer');

    assert.ok(service, 'Registered the service');
  });
});
