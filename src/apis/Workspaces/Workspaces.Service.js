var axios = require('axios');

function Workspace(data) {
  this.data = data;
  this.url = 'http://localhost:3000/';
}

Workspace.prototype.createWorkspace = function () {
  var body = {};
  body.workspaceDispalyName = this.data.workspaceDispalyName;
  return axios
    .post(this.url + this.data.companyDisplayName + '/workspaces', body)
    .then(function (data) {
      return data.data.data;
    })
    .catch(function (e) {
      return e;
    });
};

Workspace.prototype.updateWorkspace = function () {
  var body = {};
  body.newWorkspaceDispalyName = this.data.newWorkspaceDispalyName;
  return axios
    .patch(
      this.url + this.data.companyDisplayName + '/workspaces/' + this.data.workspaceDispalyName,
      body
    )
    .then(function (data) {
      return data.data.data;
    })
    .catch(function (e) {
      return e;
    });
};

module.exports = Workspace;
