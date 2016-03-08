
/**
 * QuestionController
 *
 * @description :: Server-side logic for managing Questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var UrbanAirshipPush = require('urban-airship-push');
 // Your app access configuration. You will find this stuff in your App
 // Settings under App Key, App Secret and App Master Secret.
 var config = {
     key: 'UWBj9II1Tc-GBn4aioUHUw',
     secret: 'q4q2I2DNQw2URglIRPkC-Q',
     masterSecret: 'mL0uDhSPThSrfQyGp4kw0w'
 };

 // Create a push object
 var urbanAirshipPush = new UrbanAirshipPush(config);

module.exports = {
  /**
   * `QuestionController.getAnswers()`
   */
  getAnswers: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },
  /**
   * `QuestionController.getCorrectAnswer()`
   */
  getCorrectAnswer: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },

  /**
   * `QuestionController.askQuestion()`
   */
  askQuestion: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },

  ask: function(req, res) {
    //console.log("ask api hit");
    Question.findOne({id:req.query.id}).exec(function (err, question) {
      if(err) {
        return res.json({
          error: res.negotiate(err)
        });
      } if (!question) {
        return res.json({
          error: 'Question not found'
        });
      }

      console.log(question);
    });
/*
    var pushInfo = {
      "audience": "all",
      "notification": {
         "alert": "Extras example",
         "android": {
           "extra": {
             "question": "Why does this website suck?",
             "quiz_id": 1,
             "answer": "Its bad",

             //"answer_choices": ["Its bad", "Its good"],
             "time_limit": 50,
             "type": "multiple-choice"
           }
         }
      },
      "device_types": ["android"]
    };

    console.log(pushInfo);
    urbanAirshipPush.push.send(pushInfo, function (err, data) {
        if (err) {
            // Handle error
            console.log(err);
            return;
        }

        console.log(data);
    });*/
  },

  answer: function(req, res) {
    console.log("Question ID: " + req.param('quest_id'));
    console.log("Quiz ID: " + req.param('quiz_id'));
    console.log("User Email: " + req.param('user'));
    console.log("Answer: " + req.param('answer'));
    console.log("post request");
    return res.json({
      hello: 'did it work'
    });
  }
};
