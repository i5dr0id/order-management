/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require('joi'); // package for request validation

module.exports = {

  /**
   * `CustomerController.register()`
   */
  register: async function (req, res) {
    console.log("CALLEDR")
    try {
      // validation schema
      const schema = Joi.object().keys({
        fullname: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        phone: Joi.string().required()
        // phone: Joi.string().trim().regex(/^[0-9]{11,12}$/).required()
      });

      // validate values from request body
      const {
        fullname,
        email,
        password,
        phone
      } = await Joi.validate(req.allParams(), schema);

      // Check if Customers exist
      const user = await Customers.findOne({
        email
      });
      if (user) {
        return res.json({
          status: 'error',
          message: 'user already exist',
        })
      }

      // hash password
      const encryptedPassword = await PasswordService.hashPassword(password);

      // create new customer
      const customer = await Customers.create({
        fullname,
        email,
        password: encryptedPassword,
        phone
      }).fetch();

      //remove password
      delete customer.password

      customer.token = JWTService.issuer({
        customerID: customer.id
      }, '10 days');


      // send response
      return res.json({
        message: 'Customer account created successfully',
        customer
      });
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({
          err
        });
      }
      return res.serverError(err);
    }
  },

  /**
   * `CustomerController.login()`
   */
  login: async function (req, res) {
    console.log(req.allParams())
    try {
      const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });

      const {
        email,
        password
      } = await Joi.validate(req.allParams(), schema);
      const customer = await Customers.findOne({
        email
      });

      if (!customer) {
        console.log("customer does not exist")
        return res.notFound({
          err: 'customer does not exist'
        });
      }

      const matchedPassword = await PasswordService.comparePassword(password, customer.password);

      if (!matchedPassword) {
        return res.badRequest({
          err: 'unauthorized'
        });
      }

      customer.token = JWTService.issuer({
        customerID: customer.id
      }, '10 days');
      delete customer.password;

      return res.json({
        message: 'Customer Login successful',
        customer
      });
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({
          err
        });
      }
      return res.serverError(err);

    }
  }

};
