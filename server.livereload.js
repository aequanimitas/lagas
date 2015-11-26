var server = require('livereload').createServer();

server.watch([__dirname + '/public', __dirname + '/components']);
