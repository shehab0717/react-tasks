import React from 'react';
import './App.css';
import Layout from './layouts/_Layout'
import BooksList from  './components/BooksList';

function App() {
  return (
    <div className="container">
      <Layout>
        <BooksList title="Reading"/>
        <BooksList title="Want to read"/>
      </Layout>
    </div>
  );
}

export default App;
