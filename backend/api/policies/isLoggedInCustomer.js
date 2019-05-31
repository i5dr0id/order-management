module.exports = async function (req, res, next) {

  if (!req.headers || !req.headers.authorization) {
    return res.badRequest({
      err: 'authorization header is missing'
    });
  }
  const customerToken = req.headers.authorization;
  const payload = JWTService.verify(customerToken);
  if (payload.customerID) {
    const customer = await Customers.findOne({
      id: payload.customerID
    });

    if (!customer) {
      return next({
        err: 'invalid CUSTOMER token'
      });
    }
    req.customer = customer.id;
  } else {
    return next({
      err: 'invalid CUSTOMER token'
    });
  }
  next();
};
