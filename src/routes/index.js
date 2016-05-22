const admin = require('./admin');
const home = require('./home');

const startRouter = (funcName, express, app, namespace = '') => {
  const router = express.Router();
  funcName(router);
  app.use(`/${namespace}`, router);
};

const init = (express, app) => {
  startRouter(admin, express, app, 'admin');

  // app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).send('Something broke!');
  // });
};

module.exports = {
  init: init
};
