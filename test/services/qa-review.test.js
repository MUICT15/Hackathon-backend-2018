const assert = require('assert');
const app = require('../../src/app');

describe('\'qa-review\' service', () => {
  it('registered the service', () => {
    const service = app.service('qa-review');

    assert.ok(service, 'Registered the service');
  });
});
