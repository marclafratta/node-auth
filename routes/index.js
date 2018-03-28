var express = require('express');
var router = express.Router();
const log   = require('debug')('authtutorial:router-index');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  log("in the post " + req.body.email);
  log("email " + req.body.email);
  log("username " + req.body.username);
  log("password "+ req.body.password);
  log("passwordconf "+ req.body.passwordConf);

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
        log("errror a user");
      } else {
        log("adding a user");
        return res.redirect('/profile');
      }
    });
    
  }
  else{
    log("cant parse or something");
    return res.redirect('/');
  }
})

module.exports = router;
