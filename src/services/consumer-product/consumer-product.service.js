// Initializes the `consumer-product` service on path `/consumer-product`
const createService = require('feathers-mongoose');
const createModel = require('../../models/consumer-product.model');
const hooks = require('./consumer-product.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'consumer-product',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/consumer-product', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('consumer-product');

  service.hooks(hooks);
};
