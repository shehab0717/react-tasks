import React from 'react';
import BookCard from './BookCard';

class BooksList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="mt-5">
                <h4>{this.props.title}</h4>
                <div className="row">
                    {
                        (this.props.books.length > 0)
                            ? (this.props.books.map(
                                book => <BookCard key={book.id} {...book} updateList={this.props.refresh} />
                            ))
                            : (
                                <div className='empty-list'>
                                    No books
                                </div>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default BooksList;
