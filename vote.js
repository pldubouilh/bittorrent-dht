var DHT = require('.');

var crypto = require('crypto');
function sha1(str) {
  return crypto.createHash('sha1').update(str).digest('hex')
}

var dht = new DHT();

dht.listen(8000, function() {
  console.log('now listening');
});

dht.on('ready', function() {
  console.log('now ready');
});

dht.on('error', function(err) {
  //console.log(err);
});

dht.on('warning', function(warning) {
  console.log(warning);
});
