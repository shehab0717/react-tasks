import React from 'react';
import BookCard from './BookCard';

class BooksList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [
                { title: 'Book 1' },
                { title: 'Book 2' },
                { title: 'Book 3' }
            ]
        }
    }

    render() {

        return (
            <div className="mt-5">
                <h2>{this.props.title}</h2>
                <div className="row">
                    {
                        this.state.books.map(
                            book => <BookCard {...book} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default BooksList;
