/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   **********************************************/

  'GET /': 'home/view-home',

  'GET /signup': 'auth/view-signup',
  'POST /signup': 'auth/signup',

  'GET /check-email': 'auth/view-check-email',
  'GET /verify-email': 'auth/verify-email',

  'GET /link-expired': 'auth/view-link-expired',
  'GET /resend-link': 'auth/resend-link',

  'GET /:operation/success': 'auth/view-success',

  'GET /login': 'auth/view-login',
  'POST /login': 'auth/login',

  'GET /forgot-password': 'auth/view-forgot-password',
  'POST /forgot-password': 'auth/forgot-password',

  'GET /reset-password': 'auth/view-reset-password',
  'POST /reset-password': 'auth/reset-password',

  'GET /dashboard': 'dashboard/view-dashboard',

  'GET /profile': 'user/view-profile',
  'PATCH /profile': 'user/update-profile',
  'DELETE /profile': 'user/delete-profile',

  'DELETE /logout': 'user/logout',

  'GET /auth/:provider/redirect': 'auth/redirect',

  'GET /auth/:provider/callback': 'auth/callback',

  // TODO CRUD ROUTES - API REST (headless style)
  'POST /api/todos' : 'todo/create',
  'GET /api/todos/:id' : 'todo/read',
  'GET /api/todos' : 'todo/read-all',
  'DELETE /api/todos/:id' : 'todo/delete',
  'PUT /api/todos/:id' : 'todo/update',

  /* VARIANTE:
  'POST /api/todos' : {action: 'todo/create'},
  'GET /api/todos/:id' : {action: 'todo/read'},
  'GET /api/todos' : {action: 'todo/read-all'},
  'DELETE /api/todos/:id' : {action: 'todo/delete'},
  'PUT /api/todos/:id' : {action: 'todo/update'}, */

  // Inertia Pages (Vue + Inertia)
  'GET /todos' : 'todo/view-todos',
  'GET /todos/:id' : 'todo/view-todo',

    // USERS LIST
  'GET /users': 'user/view-users'

}
