var User = require('./Users.Service');
var validate = require('../../services/ValidationService');

module.exports = {
  createUser: function (req, res, next) {
    if (
      !req.params.companyDisplayName ||
      !validate.displayName.test(req.params.companyDisplayName)
    ) {
      var err = new Error('valid companyDisplayName required!');
      err.status = 403;
      return next(err);
    }
    if (
      !req.params.workspaceDispalyName ||
      !validate.displayName.test(req.params.workspaceDispalyName)
    ) {
      var err1 = new Error('valid workspaceDispalyName required!');
      err1.status = 403;
      return next(err1);
    }
    if (!req.body.email || !validate.email.test(req.body.email)) {
      var err2 = new Error('valid email required!');
      err2.status = 403;
      return next(err2);
    }
    if (!req.body.role || !validate.roles.test(req.body.role)) {
      var err3 = new Error('valid role required!');
      err3.status = 403;
      return next(err3);
    }
    req.body.companyDisplayName = req.params.companyDisplayName;
    req.body.workspaceDispalyName = req.params.workspaceDispalyName;
    var instance = new User(req.body);
    return instance
      .createUser()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  },
  updateUser: function (req, res, next) {
    if (
      !req.params.companyDisplayName ||
      !validate.displayName.test(req.params.companyDisplayName)
    ) {
      var err = new Error('valid companyDisplayName required!');
      err.status = 403;
      return next(err);
    }
    if (
      !req.params.workspaceDispalyName ||
      !validate.displayName.test(req.params.workspaceDispalyName)
    ) {
      var err1 = new Error('valid workspaceDispalyName required!');
      err1.status = 403;
      return next(err1);
    }
    if (!req.body.email || !validate.email.test(req.body.email)) {
      var err2 = new Error('valid email required!');
      err2.status = 403;
      return next(err2);
    }

    if (req.body.newRole && !validate.roles.test(req.body.newRole)) {
      var err3 = new Error('valid newRole required!');
      err3.status = 403;
      return next(err3);
    }
    if (req.body.newEmail && !validate.email.test(req.body.newEmail)) {
      var err4 = new Error('valid newEmail required!');
      err4.status = 403;
      return next(err4);
    }

    if (!req.body.newRole && !req.body.newEmail) {
      var err5 = new Error('valid newRole required!');
      err5.status = 403;
      return next(err5);
    }
    req.body.companyDisplayName = req.params.companyDisplayName;
    req.body.workspaceDispalyName = req.params.workspaceDispalyName;
    var instance = new User(req.body);
    return instance
      .updateUser()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  },
  removeUser: function (req, res, next) {
    if (
      !req.params.companyDisplayName ||
      !validate.displayName.test(req.params.companyDisplayName)
    ) {
      var err = new Error('valid companyDisplayName required!');
      err.status = 403;
      return next(err);
    }
    if (
      !req.params.workspaceDispalyName ||
      !validate.displayName.test(req.params.workspaceDispalyName)
    ) {
      var err1 = new Error('valid workspaceDispalyName required!');
      err1.status = 403;
      return next(err1);
    }
    if (!req.body.email || !validate.email.test(req.body.email)) {
      var err2 = new Error('valid email required!');
      err2.status = 403;
      return next(err2);
    }
    req.body.companyDisplayName = req.params.companyDisplayName;
    req.body.workspaceDispalyName = req.params.workspaceDispalyName;
    var instance = new User(req.body);
    return instance
      .removeUser()
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
