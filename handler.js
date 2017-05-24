'use strict';
var pusher = require('./pusher')
module.exports.push = (event, context, callback) => {
  const requestBody = JSON.parse(event.body)
  var {channelName, eventName, data} = requestBody
  pusher.trigger(channelName, eventName, data)
  const response = {
    statusCode: 200,
    body: JSON.stringify(JSON.stringify(requestBody))
  };

  callback(null, response);
};
