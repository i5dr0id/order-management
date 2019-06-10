/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  TestController: {
    // 'adminOnly': 'isLoggedInAdmin',
    // 'customerOnly': 'isLoggedInCustomer'
  },

  UserController: {
    '*': true
  },

  'v1/ProductController': {
    'create': 'isLoggedInAdmin'
  },

  'v1/OrderController': {
    'create': 'isLoggedInCustomer',
    'index': 'isLoggedInCustomer'
  }

};
