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
    render() {
        return (<>
            <BooksList title='Reading' refresh={this.refresh} books={this.state.books} type='reading' />
            <BooksList title='Want to read' refresh={this.refresh} books={this.state.books} type='toRead' />
            <BooksList title='Read' refresh={this.refresh} books={this.state.books} type='read'/>
        </>);
    }
}

export default Home;