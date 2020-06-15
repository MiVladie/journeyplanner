import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configureStore } from './hooks-store/journeys-store';

configureStore();

ReactDOM.render(<App />,document.getElementById('root'));
