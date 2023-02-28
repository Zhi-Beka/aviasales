import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorBoundary from './errorProvider/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
);
