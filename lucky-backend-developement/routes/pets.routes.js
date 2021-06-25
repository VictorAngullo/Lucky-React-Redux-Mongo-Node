const express = require('express');
const controller = require('../controllers/pets.controller');
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware');
const middleware = require('../middlewares/auth.middlewares');

const router = express.Router();

router.get('/', controller.petFindByQueryGet);

router.get('/:id', controller.petByIdGet);

router.post('/create', middleware.isShelter, [upload.single('image'), uploadToCloudinary], controller.createPetPost);

router.post('/:id', middleware.isShelter, controller.petDeleteByIdPost);

router.post('/:id/adopt', controller.adoptPet);

module.exports = router;
