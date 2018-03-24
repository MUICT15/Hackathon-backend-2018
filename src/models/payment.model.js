// payment-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const payment = new Schema({
    consumerID:{
      type: String,
      required: true
    },
    jobID:{
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    token:{
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('payment', payment);
};
