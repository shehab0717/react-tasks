import React from 'react';

class BookCard extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="col-md-4">
                <div className="card book-card">
                    <div className="card-image">
                        <img className="w-100" src="https://www.noor-book.com/publice/covers_cache_webp/1/1/2/3/f635f56b641239acb0d2fbd2f4e0546e.jpg.webp" alt="" />
                    </div>
                    <div className="card-body">
                        <div className="book-title">
                            Book name
                        </div>
                    </div>
                    <div className="action-btn">
                        M
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;