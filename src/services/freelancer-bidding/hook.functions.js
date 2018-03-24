module.exports.addBid = () => {
  return (hook) => {
    hook.app.service('consumer-product').create('');
  };
};
