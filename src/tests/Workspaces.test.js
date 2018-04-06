var expect = require('chai').expect;
var mongoose = require('mongoose');
var server = require('./mockServer.js');
var Company = require('../apis/Companies/Companies.Service');
var Workspace = require('../apis/Workspaces/Workspaces.Service');

describe('Workspaces Test', function () {
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

  it('should create a new Workspace', function (done) {
    var data = { companyDisplayName: 'Avion', workspaceDispalyName: 'SomweWorkSpace' };
    var instance = new Workspace(data);
    var Create = instance.createWorkspace();
    Create.then(function (result) {
      expect(result).to.equal('Success');
      done();
    });
  });

  it('should get update 1 workspace', function (done) {
    var data = {
      companyDisplayName: 'Avion',
      workspaceDispalyName: 'SomweWorkSpace',
      newWorkspaceDispalyName: 'NewWorkspace'
    };
    var instance = new Workspace(data);
    var getOne = instance.updateWorkspace();
    getOne.then(function (result) {
      expect(result).to.equal('Success');
      done();
    });
  });
});
