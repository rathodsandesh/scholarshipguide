var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var User = require('./models/user');
var Scholarship = require('./models/scholarship');
var app = express();

app.use(bodyParser.json());
mongoose.connect('mongodb+srv://[admin]:[password]@cluster0-t95hm.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, function(err){
    if(err){
        console.log('Not connected to the database');
    }else{
        console.log('Connection Established !!');
    }
});
// app.use(bodyParser.json());
// app.get('/', function (req, res) {
//    res.send('Hello World');
// });


app.post('/user',async function( req, res){

  var user = new User();
  var uid;

 //user.uname = req.body.queryResult.queryText;
  // user.uname = req.body.uname;
  // console.log(req.body.uname);
  
  if(req.body.queryResult.queryText){
    caste = req.body.queryResult.queryText
    user.caste = req.body.queryResult.queryText;
    user.save(function(err, result){
    if(err){
      console.log(err);
    }else{
      console.log('save successful');
    }
  });
   uid = user._id;
  console.log(uid);
  Scholarship.findOne({"caste":caste},function(err,result){

    console.log(result);
    
    var title = result.title;
    var description = result.description;
    var link = result.link;
    var education = result.education;
    var salary = String(result.salary);
    console.log(salary);
    
    
    res.json({
  
  "fulfillmentText": "Hello from webhook",

  "source": "NodeJS",




"payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "Scholarship is as following"
            }
          }
        ]
      },
      "systemIntent": {
        "intent": "actions.intent.OPTION",
        "data": {
          "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
          "listSelect": {
            "title": "Optimum scholarship for you",
            "items": [
              {
                "optionInfo": {
                  "key": "first title key"
                },
                "title": title
              },
              {
                "optionInfo": {
                  "key": "second"
                },
                "title": description
              },
              {
                "optionInfo": {
                  "key": "third"
                },
                "title": link
              },
              {
                "optionInfo": {
                  "key": "fourth"
                },
                "title": education
              },
              {
                "optionInfo": {
                  "key": "fifth"
                },
                "title": salary
              },
            ]
          }
        }
      }
    }
  }
    });
  });
}

  
 // if(req.body.education){
 //    edu = req.body;
 //    console.log(user._id);

 //    User.updateOne({"_id":uid},{$set:edu},function(err, result){
 //    if(err){
 //      console.log(err);
 //    }
 //  });

 //   console.log(uid);

 //   res.json({
 //    "education": "Insert"
 //   });

 //  }



  // user.caste = req.body.caste;
  //user.education = req.body.education;
  // user.caste = req.body.queryResult.queryText;
  // user.education = req.body.queryResult.queryText;
  // user.salary = req.body.queryResult.queryText;


  
 // window.setTimeout(function, milliseconds);
  // User.find( setTimeout( function(err, result){
  //   console.log(result.uname);
  //    var speech = "Hi"+result.uname+",How are you";
  //    console.log(speech);
  //      res.json({
  //     fulfillmentText: speech ,
  //     source: "TeamOnion"
  //   });
  // },5000));
});

app.listen(process.env.PORT || 8081, function() {
  console.log("Server up and listening");
});
