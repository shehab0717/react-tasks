import React from 'react';
import BookCard from './BookCard';

class BooksList extends React.Component {

    constructor(props) {
        super(props);
        
    }


    render() {

        return (
            <div className="mt-5">
                <h2>{this.props.title}</h2>
                <div className="row">
                    {
                        this.props.data.map(
                            book => <BookCard key={book.id} {...book} updateList={this.props.refresh} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default BooksList;
