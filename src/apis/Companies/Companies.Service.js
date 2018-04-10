var axios = require('axios');

function Company(data) {
  this.data = data;
  this.url = 'http://localhost:3000/';
}

Company.prototype.getCompanies = function () {
  return axios
    .get(this.url)
    .then(function (data) {
      return data.data.data;
    })
    .catch(function (e) {
      return e;
    });
};

Company.prototype.getOneCompany = function () {
  return axios
    .get(this.url + this.data.displayName)
    .then(function (data) {
      return data.data.data;
    })
    .catch(function (e) {
      return e;
    });
};

Company.prototype.createCompany = function () {
  var body = {};
  body.displayName = this.data.displayName;
  return axios
    .post(this.url, body)
    .then(function (data) {
      return data.data.data;
    })
    .catch(function (e) {
      return e;
    });
};

Company.prototype.updateCompany = function () {
  var body = {};
  return axios
    .patch(this.url + this.data.displayName, body)
    .then(function (data) {
      return data.data.data;
    })
    .catch(function (e) {
      return e;
    });
};

module.exports = Company;
