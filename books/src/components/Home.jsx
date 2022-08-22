import React from "react";
import withLocalStorage from "../HOC/WithLocalStorage";
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
    render() {
        const ReadingBookList = withLocalStorage(BooksList, 'reading');
        const ToReadBookList = withLocalStorage(BooksList, 'toRead');
        const ReadBookList = withLocalStorage(BooksList, 'read');
        return (<>
            <ReadingBookList title="Reading" refresh={this.refresh} />
            <ToReadBookList title="Want to read" refresh={this.refresh} />
            <ReadBookList title="read" refresh={this.refresh} />
        </>);
    }
}

export default Home;