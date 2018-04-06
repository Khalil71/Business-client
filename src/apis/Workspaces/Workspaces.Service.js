var axios = require('axios');

function Workspace(data) {
  this.data = data;
  this.url = 'http://localhost:3000/companies/';
}

Workspace.prototype.createWorkspace = function () {
  var body = {};
  body.companyDisplayName = this.data.companyDisplayName;
  body.workspaceDispalyName = this.data.workspaceDispalyName;
  return axios.post(this.url + body.companyDisplayName + '/workspaces', body).then(function (data) {
    return data.data.data;
  });
};

Workspace.prototype.updateWorkspace = function () {
  var body = {};
  body.companyDisplayName = this.data.companyDisplayName;
  body.workspaceDispalyName = this.data.workspaceDispalyName;
  body.newWorkspaceDispalyName = this.data.newWorkspaceDispalyName;
  return axios
    .patch(this.url + body.companyDisplayName + '/workspaces/' + body.workspaceDispalyName, body)
    .then(function (data) {
      return data.data.data;
    });
};

module.exports = Workspace;
