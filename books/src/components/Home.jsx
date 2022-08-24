import React from "react";
import BooksList from "./BooksList";
import {Link} from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props);
        const books = JSON.parse(localStorage.getItem('books'));
        this.state = {
            books: books ?? []
        }
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        const books = JSON.parse(localStorage.getItem('books'));
        this.setState({ books: books ?? [] });
    }
    getBooks(listName){
        return this.state.books.filter(book=>book.list == listName);
    }
    render() {
        return (<>
            <BooksList title='Reading' refresh={this.refresh} books={this.state.books} type='reading' />
            <BooksList title='Want to read' refresh={this.refresh} books={this.state.books} type='toRead' />
            <BooksList title='Read' refresh={this.refresh} books={this.state.books} type='read'/>
            <Link className="search-btn" to='/search'>+Book</Link>
        </>);
    }
}

export default Home;