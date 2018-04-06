var axios = require('axios');

function Company(data) {
  this.data = data;
  this.url = 'http://localhost:3000/companies/';
}

Company.prototype.getCompanies = function () {
  return axios.get(this.url).then(function (data) {
    return data.data.data;
  });
};

Company.prototype.getOneCompany = function () {
  return axios.get(this.url + this.data.displayName).then(function (data) {
    return data.data.data;
  });
};

Company.prototype.createCompany = function () {
  var body = {};
  body.displayName = this.data.displayName;
  return axios.post(this.url, body).then(function (data) {
    return data.data.data;
  });
};

Company.prototype.updateCompany = function () {
  var body = {};
  body.newDisplayName = this.data.newDisplayName;
  return axios.patch(this.url + this.data.displayName, body).then(function (data) {
    return data.data.data;
  });
};

module.exports = Company;
