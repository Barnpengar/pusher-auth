var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '334253',
  key: '6bf6b63b47c82ee0c678',
  secret: 'f9193e71b086974b7dc3',
  cluster: 'eu',
  encrypted: true
});

module.exports = pusher
