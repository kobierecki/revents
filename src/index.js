import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';

const rootElements = document.getElementById('root');

function render() {
	ReactDOM.render(<App />, rootElements)
}

if (module.hot) {
	module.hot.accept('./app/layout/App.jsx', function () {
		setTimeout(render);
	})
}

render();

