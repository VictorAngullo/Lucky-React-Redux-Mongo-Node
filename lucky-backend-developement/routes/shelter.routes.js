const express = require('express');
const controller = require('../controllers/shelters.controller');
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware');

const router = express.Router();

router.get('/', controller.allSheltersGet);

router.get('/:id', controller.shelterByIdGet);

router.post('/register', [upload.single('image'), uploadToCloudinary], controller.registerPost);

router.post('/login', controller.loginPost);

router.post('/logout', controller.logoutPost);

module.exports = router;

