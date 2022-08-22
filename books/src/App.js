import React from 'react';
import './App.css';
import Layout from './layouts/_Layout'
import BooksList from  './components/BooksList';
import withLocalStorage from './HOC/WithLocalStorage';

function App() {
  const ReadingBookList = withLocalStorage(BooksList, 'reading');
  const ToReadBookList = withLocalStorage(BooksList, 'toRead');
  const ReadBookList = withLocalStorage(BooksList, 'read');
  return (
    <div className="container">
      <Layout>
        <ReadingBookList title="Reading"/>
        <ToReadBookList title="Want to read"/>
        <ReadBookList title="read"/>
      </Layout>
    </div>
  );
}

export default App;
