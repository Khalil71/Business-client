var Company = require('./Companies.Service');
var validate = require('../../services/ValidationService');

module.exports = {
  getCompanies: function (req, res, next) {
    var instance = new Company();
    return instance
      .getCompanies()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  },
  getOneCompany: function (req, res, next) {
    if (!req.params.displayName || !validate.displayName.test(req.params.displayName)) {
      var err = new Error('valid displayName required!');
      err.status = 403;
      return next(err);
    }
    var instance = new Company(req.params);
    return instance
      .getOneCompany()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  },
  createCompany: function (req, res, next) {
    if (!req.body.displayName || !validate.displayName.test(req.body.displayName)) {
      var err = new Error('valid displayName required!');
      err.status = 403;
      return next(err);
    }
    var instance = new Company(req.body);
    return instance
      .createCompany()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  },
  updateCompany: function (req, res, next) {
    if (!req.params.displayName || !validate.displayName.test(req.params.displayName)) {
      var err = new Error('valid displayName required!');
      err.status = 403;
      return next(err);
    }
    if (!req.body.newDisplayName || !validate.displayName.test(req.body.newDisplayName)) {
      var err2 = new Error('valid newDisplayName required!');
      err2.status = 403;
      return next(err2);
    }
    req.body.displayName = req.params.displayName;
    var instance = new Company(req.body);
    return instance
      .updateCompany()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  }
};
