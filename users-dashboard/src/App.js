import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/users/users';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App container-fluid">
        <UserForm />
        <div className='row'>
          <div className='col-3'>
            <SideBar />
          </div>
          <div className='col'>
            <Users />
          </div>
        </div>

      </div>
    </Provider>
  );
}



export default App;
