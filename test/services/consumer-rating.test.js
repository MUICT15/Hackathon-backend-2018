const assert = require('assert');
const app = require('../../src/app');

describe('\'consumer-rating\' service', () => {
  it('registered the service', () => {
    const service = app.service('consumer-rating');

    assert.ok(service, 'Registered the service');
  });
});
