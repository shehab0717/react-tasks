import React from "react";
import BooksList from "./BooksList";
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
            <BooksList title='Reading' refresh={this.refresh} books={this.getBooks('reading')}/>
            <BooksList title='Want to read' refresh={this.refresh} books={this.getBooks('toRead')}/>
            <BooksList title='Read' refresh={this.refresh} books={this.getBooks('read')} />
        </>);
    }
}

export default Home;