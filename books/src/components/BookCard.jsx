import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function BookCard(book) {

    const { id, title, cover } = book;

    const [moreMenue, toggleMoreMenue] = useState(false);

    function addBookTo(book, listName) {
        var books = JSON.parse(localStorage.getItem('books'));
        books = books ?? [];
        books.push({ ...book, list: listName });
        localStorage.setItem('books', JSON.stringify(books));
    }
    function removeBook(book) {
        var books = JSON.parse(localStorage.getItem('books'));
        books = books ?? [];
        var remainingBooks = books.filter(b => b.id != book.id);
        localStorage.setItem('books', JSON.stringify(remainingBooks));
    }

    function btnClicked(event) {
        const listName = event.target.getAttribute('data-list-name');
        removeBook(book);
        if (listName != 'none')
            addBookTo(book, listName);
        toggleMoreMenue(!moreMenue);
        book.updateList();
    }

    const navigate = useNavigate();
    function goToDetails(event) {
        if(!event.target.matches('.more-menue') && !event.target.closest('.more-menue'))
            navigate('/details/' + id);
    }

    return (
        <div className="col-sm-6 col-xs-12 col-md-4 col-lg-3 mb-4">
            <div className="card book-card" onClick={goToDetails}>
                <div className="card-image">
                    <img className="w-100" src={cover} alt="" />
                </div>
                <div className="card-body">
                    <div className="book-title">
                        {title}
                    </div>
                </div>
                <div className="more-menue">
                    {moreMenue
                        ?
                        <div className='menue'>
                            <button className='btn' data-list-name='toRead' onClick={btnClicked}>Want to read</button>
                            <button className='btn' data-list-name='read' onClick={btnClicked}>Read</button>
                            <button className='btn' data-list-name='reading' onClick={btnClicked}>Currently reading</button>
                            <button className='btn' data-list-name='none' onClick={btnClicked}>None</button>
                        </div>
                        : <></>
                    }
                    <div onClick={() => toggleMoreMenue(!moreMenue)} className="action-btn">
                        {moreMenue ? 'X' : '>>'}
                    </div>
                </div>
            </div>
        </div>
    );
}







// class BookCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             moreMenue: false
//         }
//         this.showMore = this.showMore.bind(this);
//         this.btnClicked = this.btnClicked.bind(this);
//         this.goToDetails = this.goToDetails.bind(this);
//     }

//     showMore() {
//         this.setState({ moreMenue: !this.state.moreMenue });
//     }

//     addBookTo(book, listName) {
//         var books = JSON.parse(localStorage.getItem('books'));
//         books = books ?? [];
//         books.push({ ...book, list: listName });
//         localStorage.setItem('books', JSON.stringify(books));
//     }
//     removeBook(book) {
//         var books = JSON.parse(localStorage.getItem('books'));
//         books = books ?? [];
//         var remainingBooks = books.filter(b => b.id != book.id);
//         localStorage.setItem('books', JSON.stringify(remainingBooks));
//     }

//     btnClicked(event) {
//         const listName = event.target.getAttribute('data-list-name');
//         this.removeBook(this.props);
//         if (listName != 'none')
//             this.addBookTo(this.props, listName);
//         this.setState({ moreMenue: false })
//         this.props.updateList();
//     }

//     goToDetails(){
//         const navigate = useNavigate();
//         console.log(this.props);
//         navigate('/details/'+this.props.id);
//     }
//     render() {
//         const { title, cover } = this.props;
//         return (
//             <div className="col-sm-6 col-xs-12 col-md-4 col-lg-3 mb-4">
//                 <div className="card book-card" onClick={this.goToDetails}>
//                     <div className="card-image">
//                         <img className="w-100" src={cover} alt="" />
//                     </div>
//                     <div className="card-body">
//                         <div className="book-title">
//                             {title}
//                         </div>
//                     </div>
//                     <div className="more-menue">
//                         {this.state.moreMenue
//                             ?
//                             <div className='menue'>
//                                 <button className='btn' data-list-name='toRead' onClick={this.btnClicked}>Want to read</button>
//                                 <button className='btn' data-list-name='read' onClick={this.btnClicked}>Read</button>
//                                 <button className='btn' data-list-name='reading' onClick={this.btnClicked}>Currently reading</button>
//                                 <button className='btn' data-list-name='none' onClick={this.btnClicked}>None</button>
//                             </div>
//                             : <></>
//                         }
//                         <div onClick={this.showMore} className="action-btn">
//                             {this.state.moreMenue ? 'X' : '>>'}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default BookCard;