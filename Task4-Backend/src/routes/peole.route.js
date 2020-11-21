const express = require('express');

const router = express.Router();

const peopleCtrl = require('../controllers/people.controller');

router.post('/people', peopleCtrl.addPeople);
router.get('/people', peopleCtrl.getPeople);
router.delete('/people/:id', peopleCtrl.removePeople);

module.exports = router;
