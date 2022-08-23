import React from 'react';
import './App.css';
import Layout from './layouts/_Layout'
import BooksList from  './components/BooksList';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
