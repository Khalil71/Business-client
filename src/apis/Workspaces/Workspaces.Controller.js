var Workspace = require('./Workspaces.Service');
var validate = require('../../services/ValidationService');

module.exports = {
  createWorkspace: function (req, res, next) {
    if (
      !req.params.companyDisplayName ||
      !validate.displayName.test(req.params.companyDisplayName)
    ) {
      var err = new Error('valid companyDisplayName required!');
      err.status = 403;
      return next(err);
    }
    if (
      !req.body.workspaceDispalyName ||
      !validate.displayName.test(req.body.workspaceDispalyName)
    ) {
      var err1 = new Error('valid workspaceDispalyName required!');
      err1.status = 403;
      return next(err1);
    }
    req.body.companyDisplayName = req.params.companyDisplayName;
    var instance = new Workspace(req.body);
    return instance
      .createWorkspace()
      .then(function (data) {
        return res.status(200).json({ data: data, status: 200 });
      })
      .catch(function (e) {
        var newError = new Error(e.response.data.message);
        newError.status = 403;
        return next(newError);
      });
  },
  updateWorkspace: function (req, res, next) {
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
    if (
      !req.body.newWorkspaceDispalyName ||
      !validate.displayName.test(req.body.newWorkspaceDispalyName)
    ) {
      var err2 = new Error('valid newWorkspaceDispalyName required!');
      err2.status = 403;
      return next(err2);
    }
    req.body.workspaceDispalyName = req.params.workspaceDispalyName;
    req.body.companyDisplayName = req.params.companyDisplayName;
    var instance = new Workspace(req.body);
    return instance
      .updateWorkspace()
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
