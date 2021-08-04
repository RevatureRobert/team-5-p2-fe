const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

exports.testThread = {
  id: 0,
  title: "Test",
  description: "This is a test",
  author: "Matt",
  likes: 0,
  dislikes: 0
};