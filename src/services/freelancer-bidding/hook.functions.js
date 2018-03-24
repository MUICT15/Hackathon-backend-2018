module.exports.addBid = () => {
  return async(hook) => {
    await hook.app.service('consumer-product').patch(hook.data.jobID , {
      $push:{
        freelancersBid:{
          id: hook.data.freelancerID,
          name: hook.data.name,
          price: hook.data.price
        }
      }
    });
    return hook;
  };
};
