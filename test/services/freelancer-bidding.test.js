const assert = require('assert');
const app = require('../../src/app');

describe('\'freelancer-bidding\' service', () => {
  it('registered the service', () => {
    const service = app.service('freelancer-bidding');

    assert.ok(service, 'Registered the service');
  });
});
