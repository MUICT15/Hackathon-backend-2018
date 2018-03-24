// Initializes the `consumer-rating` service on path `/consumer-rating`
const createService = require('./consumer-rating.class.js');
const hooks = require('./consumer-rating.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'consumer-rating',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/consumer-rating', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('consumer-rating');

  service.hooks(hooks);
};
