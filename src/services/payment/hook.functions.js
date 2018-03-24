const omise = require('omise')({
  'publicKey': 'pkey_test_57vo88hrxzcpzuhzzrg',
  'secretKey': 'skey_test_57vo88hs85r8478o4oh'
});
module.exports.paymentWithCreditCard = () => {
  return async(hook)=>{
    omise.charges.create({
      'amount': hook.data.amount,
      'currency': 'thb',
      'card': hook.data.tokenID
    }, (err, resp) => {
      if (!err) {
        return hook;
      } else {
        console.log(err);
        return hook;
      }
    });
  };
};
