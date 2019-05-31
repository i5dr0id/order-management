module.exports = async function (req, res, next) {

  // admin: async function (req, res, next) {

  if (!req.headers || !req.headers.authorization) {
    return res.badRequest({
      err: 'authorization header is missing'
    });
  }
  const userToken = req.headers.authorization;
  const payload = JWTService.verify(userToken);
  if (payload.userID) {
    const user = await Users.findOne({
      id: payload.userID
    });

    if (!user) {
    // return res.serverError('unauthorized');
      return next({
        err: 'invalid ADMIN token'
      });
    }
    req.user = user.id;
  } else {
    return next({
      err: 'invalid ADMIN token'
    });
  }
  next();
};
