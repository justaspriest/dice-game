import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const rootEl = document.getElementById('dice-game-app');
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
