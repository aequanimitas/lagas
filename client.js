var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');

// add livereload here for simplicity's sake
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')

ReactDOM.render(<App />, document.getElementById('react-container'));
