var express = require('express');
var router = express.Router();
var ControllerMap = require('../controllers/controllersMap');
var UserController = ControllerMap.UserController;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/insert-user', function (req, res) {
  UserController.insertUser(req,res);
});


module.exports = router;