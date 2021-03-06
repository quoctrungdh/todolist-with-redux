import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoAppReducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoAppReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
