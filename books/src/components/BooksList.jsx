import React from 'react';
import BookCard from './BookCard';

class BooksList extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {

        return (
            <div className="mt-5">
                <h2>{this.props.title}</h2>
                <div className="row">
                    {
                        this.props.books.map(
                            book => <BookCard key={book.title} {...book} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default BooksList;
