var expect = require('chai').expect;
var mongoose = require('mongoose');
var server = require('./mockServer.js');
var Company = require('../apis/Companies/Companies.Service');

describe('Companies Tests', function () {
  before(function (done) {
    mongoose.connect('mongodb://test1:test1@ds245805.mlab.com:45805/business');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error')); // eslint-disable-line
    db.once('open', function () {
      console.log('We are connected to test database!'); // eslint-disable-line
      done();
    });
  });

  before(function (done) {
    mongoose.connection.db.dropCollection('companies', function () {
      console.log('Companies collection dropped'); // eslint-disable-line
      done();
    });
  });

  before(function () {
    server.listen(9999);
  });

  after(function () {
    server.close();
  });

  it('should create a new Company', function (done) {
    var data = { displayName: 'Avion' };
    var instance = new Company(data);
    var Create = instance.createCompany();
    Create.then(function (result) {
      expect(result.displayName).to.equal(data.displayName);
      done();
    });
  });

  it('should create another new Company', function (done) {
    var data = { displayName: 'Aqua' };
    var instance = new Company(data);
    var Create = instance.createCompany();
    Create.then(function (result) {
      expect(result.displayName).to.equal(data.displayName);
      done();
    });
  });

  it('should get all companies in the collection', function (done) {
    var instance = new Company();
    var getAll = instance.getCompanies();
    getAll.then(function (result) {
      expect(result.length).to.equal(2);
      done();
    });
  });

  it('should get 1 specefic company in the collection', function (done) {
    var data = { displayName: 'Avion' };
    var instance = new Company(data);
    var getOne = instance.getOneCompany();
    getOne.then(function (result) {
      expect(result.displayName).to.equal(data.displayName);
      done();
    });
  });
});
