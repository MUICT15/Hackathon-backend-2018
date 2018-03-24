// Initializes the `mathching-freelancer` service on path `/mathching-freelancer`
const createService = require('./mathching-freelancer.class.js');
const hooks = require('./mathching-freelancer.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'mathching-freelancer',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mathching-freelancer', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mathching-freelancer');

  service.hooks(hooks);
};
