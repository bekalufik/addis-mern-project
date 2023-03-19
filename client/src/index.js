import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './services/rootSagas';
import songsReducer from './features/songs/songsSlice'
import statisticsReducer from './features/statistics/statisticsSlice'

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store
const store = configureStore({
  reducer: {
    songs: songsReducer,
    statistics: statisticsReducer,
  },
  middleware: [sagaMiddleware],
});

// Run saga middleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
