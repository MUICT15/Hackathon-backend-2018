// Initializes the `qa-review` service on path `/qa-review`
const createService = require('feathers-mongoose');
const createModel = require('../../models/qa-review.model');
const hooks = require('./qa-review.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'qa-review',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/qa-review', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('qa-review');

  service.hooks(hooks);
};
