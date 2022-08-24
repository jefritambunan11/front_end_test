import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'

import {StoreProvider}  from './Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
	<StoreProvider>
		<HelmetProvider>
			<style>{"body { background-color: #e3eefa; }"}</style>
			<App  />
		</HelmetProvider>
	</StoreProvider>
</React.StrictMode>
);

