const sequelize = require('../db');
const datatype = require('sequelize');

const User = sequelize.define('user', {
  userName: {
    type: datatype.STRING,
    validate: {
      notEmpty: {
        msg: 'Must not be empty'
      }
    }
  },
  password: {
    type: datatype.TEXT,
    validate: {
      notEmpty: {
        msg: 'Must not be empty'
      },
      min: {
        args: 8,
        msg: 'Must be greater than 8'
      }
    }
  },
  userType: {
    type: datatype.STRING,
    validate: {
      notEmpty: {
        msg: 'Must not be empty'
      }
    },
    defaultValue: 'user'
  },
  email: {
    type: datatype.STRING,
    validate: {
      notEmpty: {
        msg: 'Must not be empty'
      },
      isEmail: {
        msg: 'Email not valid!'
      }
    }
  },
});

User.sync();

module.exports = User;
