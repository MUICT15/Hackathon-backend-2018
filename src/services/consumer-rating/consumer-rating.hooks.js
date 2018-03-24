const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const rating = () => {
  return async (hook) => {
    hook.app.service('users').patch(hook.data.freelancerID, {
      $push: {
        ratingReview: {
          name: hook.data.consumerName,
          comment: hook.data.comment,
          rating: hook.data.rating
        }
      }
    });
  };
};
module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      rating()
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
