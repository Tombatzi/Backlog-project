var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/backlogController');

router.route('/game')
    .get(ctrl.getGame)
    .post(ctrl.postGame);
router.route('/publisher')
    .get(ctrl.getPublisher)
    .post(ctrl.postPublisher)
router.route('/developer')
    .get(ctrl.getDeveloper)
    .post(ctrl.postDeveloper)
router.route('/platform')
    .get(ctrl.getPlatform)
    .post(ctrl.postPlatform)
module.exports = router;