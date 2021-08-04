const aws = require('aws-sdk');
const configMockDatabase = require('./constants').configMockDatabase;

// use mock database instead of real database
aws.config.update(configMockDatabase);