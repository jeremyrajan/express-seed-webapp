const userController = require('../controllers/userController');

module.exports = (adminRouter) => {
  adminRouter.get('/', (req, res) => {
    res.render('admin/login');
  });
};
