const users = require('./users/users.service.js');
const idcardImg = require('./idcard-img/idcard-img.service.js');
const consumerProduct = require('./consumer-product/consumer-product.service.js');
const freelancerBidding = require('./freelancer-bidding/freelancer-bidding.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(idcardImg);
  app.configure(consumerProduct);
  app.configure(freelancerBidding);
};
