const Shelter = require('../models/Shelters.model');
const passport = require('passport');


const registerPost = (req, res, next) => {
    passport.authenticate('registerShelter', (error, user) => {
        if (error) {
            return next(error);
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }

            return res.json(user);
        });
    })
    (req)
}

const loginPost = (req, res, next) => {
    passport.authenticate('loginShelter', (error, user) => {
        if (error) {
            return next(error);
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }

            return res.json(user);
        })
    })(req)
}

const logoutPost = (req, res, next) => {
    if(req.user) {
        req.logout();

        req.session.destroy(() => {
            res.clearCookie('connect.sid');

        })
    }
    else {
        return res.status.json('No Shelter logged before');
    }
}

const allSheltersGet = async (req, res, next) => {
    try {
        const shelters = await Shelter.find().populate('pets');

        return res.json(shelters);
    } 
    catch (error) {
        return next(error);
    };
}

const shelterByIdGet = async (req, res, next) => {
    const { id } = req.params;

    try {
        const shelter = await Shelter.findById(id).populate('pets');

        return res.json(shelter);

    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    allSheltersGet,
    shelterByIdGet,
    registerPost,
    loginPost,
    logoutPost
}