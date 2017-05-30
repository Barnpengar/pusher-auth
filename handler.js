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
  console.log('event.body', event.body)
  var params = getParams(event.body)
  console.log('params', params)
  var {socket_id, channel_name, userId, name, deviceName, profileImage} = params
  var user_info = {}

  if(userId) presenceData = {
    user_id : userId, 
    user_info : {
      name, 
      deviceName
    }
  }

  var auth = pusher.authenticate(socket_id, channel_name, presenceData);

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