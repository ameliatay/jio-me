const express = require('express')
const EventController = require('../controllers/Event')
const router = express.Router();
router.get('/', EventController.findAll);
router.get('/:id', EventController.findOne);
router.post('/', EventController.create);
router.patch('/:id', EventController.update);
router.delete('/:id', EventController.destroy);
module.exports = router