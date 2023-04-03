var express = require('express')
var path = require('path');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 4000;
var User = require('./models/user');
// var Patient = require('../models/patient');
mongoose.connect('mongodb+srv://ayushswalekar03:ayushwalekar03@cluster0.v5cvdmd.mongodb.net/registration?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');	
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    return res.render('index.ejs');})


    app.post('/', function(req, res, next) {
      console.log(req.body);
      var personInfo = req.body;
    
    
      if(!personInfo.email || !personInfo.username || !personInfo.password){
        res.send();
      } else {
        if (true) {
    
          User.findOne({email:personInfo.email},function(err,data){
            if(!data){
              var c;
              User.findOne({},function(err,data){
    
                if (data) {
                  console.log("if");
                  c = data.unique_id + 1;
                }else{
                  c=1;
                }
    
                var newPerson = new User({
                  unique_id:c,
                  email:personInfo.email,
                  username: personInfo.username,
                  phone: personInfo.phone,
                  password: personInfo.password
                });
    
                newPerson.save(function(err, Person){
                  if(err)
                    console.log(err);
                  else
                    console.log('Success');
                });
    
              }).sort({_id: -1}).limit(1);
              // res.send({"Success":"You are regestered,You can login now."});
              res.redirect('/')
            }else{
              res.send({"Success":"Email is already used."});
            }
    
          });
        }else{
          res.send({"Success":"password is not matched"});
        }
      }
    });
    
app.listen(port, (req,res)=>{
    console.log('listening on port http://127.0.0.1:'+port);
})