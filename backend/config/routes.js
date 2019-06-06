/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  // Admin
  'POST /api/v1/admin/register' : 'v1/UserController.register',
  'POST /api/v1/admin/login' : 'v1/UserController.login',

  // Customer
  'POST /api/v1/customer/register' : 'v1/CustomerController.register',
  'POST /api/v1/customer/login' : 'v1/CustomerController.login',

  // Products
  'GET /api/v1/products' : 'v1/ProductController.index',
  'POST /api/v1/product' : 'v1/ProductController.create',

  // Orders
  'POST /api/v1/customer/order' : 'v1/OrderController.create',
  'GET /api/v1/customer/orders' : 'v1/OrderController.index'

};
