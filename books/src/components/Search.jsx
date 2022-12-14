import React from "react";
import Loading from "./Loading";
import BooksList from "./BooksList";
import {Link} from 'react-router-dom';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            results: [],
            loading: false
        }

        this.textChanged = this.textChanged.bind(this);
        this.timerId = null;
    }

    render() {
        return (
            <>
                <div className="d-flex flex-row py-4">
                    <input placeholder="What are you searching for?" className="form-control" value={this.state.searchText} onChange={this.textChanged} type="text" name="" id="search-box" />
                    <Link className="btn btn-sm btn-outline-danger mx-4 pt-2 px-2" to='/'>X</Link>
                </div>
                <div className="search-results">
                    {
                        this.state.loading
                            ? <Loading />
                            : <BooksList data={this.state.results} books={this.state.results} />
                    }
                </div>
            </>

        );
    }

    async fetchData(keyword) {
        const response = await fetch(`http://openlibrary.org/search.json?q=${keyword}`)
        const data = await response.json();
        const books = this.mapResults(data.docs);
        this.setState({ results: books, loading: false });
    }

    mapResults(results) {
        const booksWithCover = results.filter(results => results.has_fulltext);
        const ret = booksWithCover.map(
            result => {
                return {
                    id: this.bookId(result.key),
                    title: result.title,
                    cover: `https://covers.openlibrary.org/b/id/${result.cover_i}.jpg`
                }
            }
        )
        return ret;
    }

    bookId(bookKey){
        return bookKey.split('/')[2];
    }
    textChanged(event) {
        this.setState({ searchText: event.target.value, loading: true });
        clearTimeout(this.timerId);
        this.timerId = setTimeout(async () => {
            this.fetchData(this.state.searchText);
        }, 1000);

    }
}

export default Search;