// consumer-product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const consumerProduct = new Schema({
    consumerID: {
      type: String,
      required: true
    },
    consumerName:{
      type:String,
      required: true
    },
    typeOfProduct: {
      type: String,
      enum: ['Off the shelf', 'Made to order'],
      required: true
    },
    status:{
      type: String,
      default: 'waiting'
    },
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    price: {
      type: Number
    },
    freelancersBid: [{
      id: {
        type: String
      },
      name: {
        type: String
      },
      price: {
        type: Number
      }
    }],
    freelancerWork: [{
      id: {
        type: String
      },
      name: {
        type: String
      }
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('consumerProduct', consumerProduct);
};
