import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './public/js/components/app';
// add livereload here for simplicity's sake
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
ReactDOM.render(<App />, document.getElementById('react-container'));
