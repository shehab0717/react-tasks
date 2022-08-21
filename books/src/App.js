import React from 'react';
import './App.css';
import Layout from './layouts/_Layout'
import BooksList from  './components/BooksList';

function App() {
  return (
    <div className="container">
      <Layout>
        <BooksList title="Reading" books={[]}/>
        <BooksList title="Want to read" books={[]}/>
        <BooksList title="Read" books={[]}/>
      </Layout>
    </div>
  );
}

export default App;
