// Initializes the `idcard-img` service on path `/idcard-img`
const hooks = require('./idcard-img.hooks');
const fs = require('fs-blob-store');
const blobService = require('feathers-blob');
const multer = require('multer');
const multipartMiddleware = multer();

// feathers-blob service
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const blobStorage = fs(__dirname + '../../../../uploads');
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/idcard-img',

    // multer parses the file named 'uri'.
    // Without extra params the data is
    // temporarely kept in memory
    multipartMiddleware.single('uri'),

    // another middleware, this time to
    // transfer the received file to feathers
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({
      Model: blobStorage
    }));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('idcard-img');

  service.hooks(hooks);
};
