var express = require('express');
var Nylas = require('nylas');
var router = express.Router();
var key = require('../config');
// buLNL25vjYz1sJhfVw3jJFlTh62jES
Nylas.config({
  appId: key.APP_ID,
  appSecret: key.APP_SECRET,
});
let token = '';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('view');
});

router.get('/connect', function (req,res,next){
  options = {
    redirectURI: 'http://localhost:3000/oauth/authorize',
  };

  console.log('Nylas.urlForAuthentication(options): ', Nylas.urlForAuthentication(options));
  res.redirect(Nylas.urlForAuthentication(options));
});

router.get('/oauth/authorize', (req, res, next) => {
  console.log(req.query.code);
  if (req.query.code) {
    Nylas.exchangeCodeForToken(req.query.code).then(t => {
      token = t;
      console.log('token: ', token);
      res.redirect('/emailcontent');
      // save the token to the current session, save it to the user model, etc.
    });
  } else if (req.query.error) {
    res.render('error', {
      message: req.query.reason,
      error: {
        status:
          'Please try authenticating again or use a different email account.',
        stack: '',
      },
    });
  }
});

router.get('/emailcontent', function (req,res,next){
  const nylas = Nylas.with(token);

  nylas.threads.first({ from: 'jinfante@sigrid.ai' }).then(thread => {
    console.log(thread.subject);
    console.log(thread.snippet);
    res.render('view',{title: 'Nylas',body: {subject : thread.subject, snippet: thread.snippet}});
    // res.render
  });
});



module.exports = router;
