const { authenticate } = require('@feathersjs/authentication').hooks;
const {paymentWithCreditCard} = require('./hook.functions');
module.exports = {
  before: {
    all: [ 
      //authenticate('jwt') 
    ],
    find: [],
    get: [
    ],
    create: [
      paymentWithCreditCard()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
