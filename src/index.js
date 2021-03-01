import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


