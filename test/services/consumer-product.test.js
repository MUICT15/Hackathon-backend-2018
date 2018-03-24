const assert = require('assert');
const app = require('../../src/app');

describe('\'consumer-product\' service', () => {
  it('registered the service', () => {
    const service = app.service('consumer-product');

    assert.ok(service, 'Registered the service');
  });
});
