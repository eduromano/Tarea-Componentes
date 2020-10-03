import React from 'react';
import logo from './logo.svg';
import './styles.css';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from './components/home';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Home />
    </BrowserRouter>
  );
}

export default App;
