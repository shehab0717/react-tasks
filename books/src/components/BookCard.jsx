import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moreMenue: false
        }
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState({ moreMenue: !this.state.moreMenue });
    }

    render() {
        const { title, cover } = this.props;
        return (
            <div className="col-sm-6 col-xs-12 col-md-4 mb-4">
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
                                <button className='btn'>Want to read</button>
                                <button className='btn'>One</button>
                                <button className='btn'>One</button>
                                <button className='btn'>One</button>
                            </div>
                            : <></>
                        }
                        <div onClick={this.showMore} className="action-btn">
                            {this.state.moreMenue? 'X':'>>'}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCard;