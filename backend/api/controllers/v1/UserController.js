/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require('joi'); // package for request validation
module.exports = {


  /**
   * `UserController.register()`
   */
  register: async function (req, res) {
    try {
      // validation schema
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });

      // validate values from request body
      const { name, email, password} = await Joi.validate(req.allParams(), schema);

      // Check if user exist
      const user = await Users.findOne({email});
      if (user) {
        return res.json({
          status:'error',
          message: 'user already exist',
        })
      }


      // hash password
      const encryptedPassword = await PasswordService.hashPassword(password);

      // create new admin
      const admin = await Users.create({
        name,
        email,
        password: encryptedPassword
      }).fetch();

      // send response
      return res.json({
        message: 'Admin account created successfully',
        admin
      });}

    catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({err});
      }
      return res.serverError(err);
    }
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });

      const {email, password} = await Joi.validate(req.allParams(), schema);
      const user = await Users.findOne({email});

      if (!user) {
        return res.notFound({err: 'user does not exist'});
      }

      const matchedPassword = await PasswordService.comparePassword(password, user.password);

      if (!matchedPassword) {
        return res.badRequest({err: 'unauthorized'});
      }

      user.token = JWTService.issuer({userID: user.id}, '10 days');
      delete user.password;

      return res.json({
        message: 'Admin Login successful',
        user,
      });
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({err});
      }
      return res.serverError(err);

    }
  }

};

