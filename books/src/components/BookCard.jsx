import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, cover} = this.props;
        return (
            <div className="col-sm-6 col-xs-12 col-md-4 mb-4">
                <div className="card book-card">
                    <div className="card-image">
                        <img className="w-100" src= {cover} alt="" />
                    </div>
                    <div className="card-body">
                        <div className="book-title">
                            {title}
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