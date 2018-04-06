var axios = require('axios');

function User(data) {
  this.data = data;
  this.url = 'http://localhost:3000/companies/';
}

User.prototype.createUser = function () {
  var body = {};
  body.email = this.data.email;
  body.role = this.data.role;
  return axios
    .post(
      this.url +
        this.data.companyDisplayName +
        '/workspaces/' +
        this.data.workspaceDispalyName +
        '/users',
      body
    )
    .then(function (data) {
      return data.data.data;
    });
};

User.prototype.updateUser = function () {
  var body = {};
  body.email = this.data.email;
  body.role = this.data.role;
  if (this.data.newEmail) {
    body.newEmail = this.data.newEmail;
  }
  if (this.data.newRole) {
    body.newRole = this.data.newRole;
  }
  return axios
    .patch(
      this.url +
        this.data.companyDisplayName +
        '/workspaces/' +
        this.data.workspaceDispalyName +
        '/users',
      body
    )
    .then(function (data) {
      return data.data.data;
    });
};

User.prototype.removeUser = function () {
  var body = {};
  body.email = this.data.email;
  return axios
    .delete(
      this.url +
        this.data.companyDisplayName +
        '/workspaces/' +
        this.data.workspaceDispalyName +
        '/users',
      { data: body }
    )
    .then(function (data) {
      return data.data.data;
    });
};

module.exports = User;
