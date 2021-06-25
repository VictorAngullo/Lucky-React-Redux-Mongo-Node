const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Shelter = require("../models/Shelters.model");

const saltRound = 10;

const validate = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

passport.serializeUser((user, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (shelterId, done) => {
  try {
    const existingShelter = await Shelter.findById(shelterId);
    return done(null, existingShelter);
  } 
  catch (error) {
    return done(error);
  }
});

passport.use(
  "registerShelter",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        if (email.length < 6) {
          const error = new Error("Email must be 6 characters min");
          return done(error);
        }

        const validEmail = validate(email);

        if (!validEmail) {
          const error = new Error("Invalid Email");
          return done(error);
        }

        const previousShelter = await Shelter.findOne({
          email: email.toLowerCase(),
        });

        if (previousShelter) {
          const error = new Error("The Shelter already exists");
          return done(error);
        }

        const hash = await bcrypt.hash(password, saltRound);
        console.log('REQ.BODY', req.body);
        const newShelter = new Shelter({
          email: email.toLowerCase(),
          username: req.body.username,
          password: hash,
          location: req.body.location,
          image: req.image_url,
          pets: [],
        });

        const savedShelter = await newShelter.save();

        return done(null, savedShelter);
      } catch (error) {
            return done(error);
      }
    }
  )
);

passport.use(
  "loginShelter",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const validEmail = validate(email);

        if (!validEmail) {
          const error = new Error("Invalid Email");
          return done(error);
        }

        const currentShelter = await Shelter.findOne({ email: email.toLowerCase() });

        if (!currentShelter) {
          const error = new Error("The shelter does not exist!");
          return done(error);
        }

        const isValidPassword = await bcrypt.compare(
          password,
          currentShelter.password
        );

        if (!isValidPassword) {
          const error = new Error("The email or password is invalid!");
          return done(error);
        }

        return done(null, currentShelter);
      } catch (error) {
            return done(error);
      }
    }
  )
);
