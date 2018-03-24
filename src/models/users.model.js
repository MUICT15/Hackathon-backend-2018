// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    email: {
      type: String,
      // unique: true
    },
    googleId: {
      type: String
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    birthDate: {
      type: String
    },
    role: {
      type: String,
      default: 'consumer',
      enum: ['consumer', 'freelancer', 'premiumFreelancer' , 'bussinessOwner']
    },
    skills: {
      type: Array
    },
    idCard: {
      type: String
    },
    jobExperince: [{
      company: {
        type: String
      },
      year: {
        type: Number
      }
    }],
    workReference: [{
      url: {
        type: String
      },
      position: {
        type: String
      }
    }],
    jobWorking:[{
      jobId:{
        type: String
      },
      name:{
        type: String
      },
      status:{
        type: String,
        default: 'waiting',
        enum:['waiting' , 'cancel' , 'complete']
      }
    }],
    ratingReview: [{
      name: {
        type: String
      },
      comment: {
        type: String
      },
      rating: {
        type: String
      }
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
