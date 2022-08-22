import React from 'react';
import BookCard from './BookCard';

class BooksList extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            reload: 1
        }
    }

    update() {
        this.setState({...this.state});
    }
    render() {

        return this.state.reload ?
            <div className="mt-5">
                <h2>{this.props.title}</h2>
                <div className="row">
                    {
                        this.props.data.map(
                            book => <BookCard key={book.id} {...book} updateList={this.update} />
                        )
                    }
                </div>
            </div>
            : <></>
    }
}

export default BooksList;
