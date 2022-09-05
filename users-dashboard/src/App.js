import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Users from './components/users/users';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
