"use strict";

var User = require('../models/user.model');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

module.exports = {
  register: function register(req, res) {
    var newUser = new User(req.body);
    console.log(newUser);
    newUser.save().then(function () {
      console.log("successful registration");
      res.json({
        message: "Successfully registered",
        user: newUser
      });
    })["catch"](function (err) {
      console.log(err);
      res.status(400).json(err);
    });
  },
  login: function login(req, res) {
    User.findOne({
      email: req.body.email
    }).then(function (user) {
      if (user === null) {
        res.status(400).json({
          message: "Email and Password did not match"
        });
      } else {
        bcrypt.compare(req.body.password, user.password).then(function (isPasswordValid) {
          if (isPasswordValid === true) {
            console.log("password is valid");
            res.cookie("usertoken", jwt.sign({
              _id: user._id,
              username: user.username,
              email: user.email
            }, process.env.JWT_SECRET), {
              httpOnly: true,
              expires: new Date(Date.now() + 900000000) // time until they have to log in again

            }).json({
              message: "Successfully logged in",
              userLoggedIn: {
                username: user.username
              }
            });
          } else {
            res.status(400).json({
              message: "Login Error Check password and email"
            });
          }
        })["catch"](function (err) {
          res.status(400).json({
            message: "Login Error Check password and email"
          });
        });
      }
    })["catch"](function (err) {
      res.status(400).json({
        message: "Login Error Check password and email"
      });
    });
  },
  logout: function logout(req, res) {
    console.log("You are logout!");
    res.clearCookie("usertoken");
    res.json({
      message: "You have successfully logged out of our system"
    });
  }
};