'use strict';
var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '334253',
  key: '6bf6b63b47c82ee0c678',
  secret: 'f9193e71b086974b7dc3',
  cluster: 'eu',
  encrypted: true
});

module.exports.auth = (event, context, callback) => {
  console.log(event)
  console.log('event.body', event.body)
  var body = JSON.parse(event.body)
  var {socketId, channelName, user} = body
  var presenceData = {}
  if(!!user && !!user.id) presenceData = {
    user_id : user.id, 
    user_info : user
  }

  var auth = pusher.authenticate(socketId, channelName, presenceData);

  const response = {
    statusCode: 200,
    body: JSON.stringify(auth)
  };

  console.log('response', response)

  callback(null, response);
};


function getParams(paramsString) {
  var result = {};
  paramsString.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = item[1];
  });
  return result;
}