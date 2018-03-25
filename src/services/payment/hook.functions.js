const omise = require('omise')({
  'publicKey': 'pkey_test_57vo88hrxzcpzuhzzrg',
  'secretKey': 'skey_test_57vo88hs85r8478o4oh'
});
module.exports.paymentWithCreditCard = () => {
  return async(hook)=>{
    console.log(hook);
    omise.charges.create({
      'amount': hook.data.price,
      'currency': 'thb',
      'card': hook.data.token
    }, (err, resp) => {
      if (!err) {
        console.log(resp);
        return hook;
      } else {
        console.log(err);
        return hook;
      }
    });
  };
};
