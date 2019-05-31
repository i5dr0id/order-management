const Joi = require('joi'); // package for request validation


module.exports = {
  index: async function (req, res) {
    try {

      const products = await Products.find();
      return res.ok(products);

    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function (req, res) {
    try {

      // product schema
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.string().required(),
        imageurl: Joi.string().required(),
        description: Joi.string().required(),
        avaliable: Joi.boolean().default(true)
      });

      // validate product request
      const { name, price, imageurl, description, avaliable} = await Joi.validate(req.allParams(), schema);

      // create product
      const product = await Products.create({
        name,
        price,
        imageurl,
        description,
        avaliable
      }).fetch();

      // send response
      return res.json({
        message: 'Product created successfully',
        product
      });

    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({err});
      }
      return res.serverError(err);
    }
  }
};
