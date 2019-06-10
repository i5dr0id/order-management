module.exports = {

  index: async function (req, res) {
    const orders = await CustomerOrder.find().populate('products');
    return res.ok(orders);
  },

  create: async function (req, res) {
    try {
      const orderedProducts = req.body.products;
      let product;
      let products = [];

      // get all products price and calculate total
      for (const _product of orderedProducts) {
        product = await Products.findOne().where({
          id: _product.id,
          avaliable: true
        });
        products.push({
          name: product.name,
          productID: product.id,
          price: product.price,
          quantity: parseInt(_product.quantity),
          total: parseFloat(product.price) * parseInt(_product.quantity)
        });
      }

      // calculate total price
      const totalPrice = products.reduce((prev, curr) => prev + curr.total, 0);

      // record customer order
      const customerOrder = await CustomerOrder.create({
        customerID: req.customer,
        total: totalPrice.toString()
      }).fetch();

      products = products.map(item => {
        item.orderID = customerOrder.id;
        return item;
      });

      const recordProduct = await OrderedProducts.createEach(products).fetch();

      // await SESService.sendEmail(toAddress, emailSubject, HTMLFormatBody, TextFormatBody)

      res.ok({
        order: customerOrder,
        product: recordProduct
      });
    } catch (error) {

      return res.serverError(error);
    }

  }
};
