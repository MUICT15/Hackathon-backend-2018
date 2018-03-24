// Initializes the `freelancer-bidding` service on path `/freelancer-bidding`
const createService = require('./freelancer-bidding.class.js');
const hooks = require('./freelancer-bidding.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'freelancer-bidding',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/freelancer-bidding', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('freelancer-bidding');

  service.hooks(hooks);
};
