import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moreMenue: false
        }
        this.showMore = this.showMore.bind(this);
        this.btnClicked = this.btnClicked.bind(this);
    }

    showMore() {
        this.setState({ moreMenue: !this.state.moreMenue });
    }

    addBookTo(book, listName) {
        var books = JSON.parse(localStorage.getItem('books'));
        books = books ?? [];
        books.push({ ...book, list: listName });
        localStorage.setItem('books', JSON.stringify(books));
    }
    removeBook(book) {
        var books = JSON.parse(localStorage.getItem('books'));
        books = books ?? [];
        var remainingBooks = books.filter(b => b.id != book.id);
        localStorage.setItem('books', JSON.stringify(remainingBooks));
    }

    btnClicked(event) {
        const listName = event.target.getAttribute('data-list-name');
        this.removeBook(this.props);
        if (listName != 'none')
            this.addBookTo(this.props, listName);
        this.setState({ moreMenue: false })
        this.props.updateList();
    }
    render() {
        const { title, cover } = this.props;
        return (
            <div className="col-sm-6 col-xs-12 col-md-4 col-lg-3 mb-4">
                <div className="card book-card">
                    <div className="card-image">
                        <img className="w-100" src={cover} alt="" />
                    </div>
                    <div className="card-body">
                        <div className="book-title">
                            {title}
                        </div>
                    </div>
                    <div className="more-menue">
                        {this.state.moreMenue
                            ?
                            <div className='menue'>
                                <button className='btn' data-list-name='toRead' onClick={this.btnClicked}>Want to read</button>
                                <button className='btn' data-list-name='read' onClick={this.btnClicked}>Read</button>
                                <button className='btn' data-list-name='reading' onClick={this.btnClicked}>Currently reading</button>
                                <button className='btn' data-list-name='none' onClick={this.btnClicked}>None</button>
                            </div>
                            : <></>
                        }
                        <div onClick={this.showMore} className="action-btn">
                            {this.state.moreMenue ? 'X' : '>>'}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;