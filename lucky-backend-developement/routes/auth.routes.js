const express = require('express');
const authMiddleware = require('../middlewares/auth.middlewares');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/',(req,res)=>{
    console.log("holamundo");
    res.send('hola');
});
router.post('/register', authController.registerPost);
router.post('/login', authController.loginPost);
router.post('/logout', authController.logoutPost);
router.get('/check-session', authController.checkSession);

module.exports = router;
