import React from "react";
import BookCard from "./BookCard";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            results: []
        }

        this.textChanged = this.textChanged.bind(this);
        this.timerId = null;
    }

    render() {
        return (
            <>
                <div className="d-flex flex-row py-4">
                    <input placeholder="What are you searching for?" className="form-control" value={this.state.searchText} onChange={this.textChanged} type="text" name="" id="search-box" />
                    <button className="btn btn-sm btn-outline-danger mx-4" onClick={this.props.cancelSearch}>cancel</button>
                </div>
                <div className="search-results">
                    
                </div>
            </>
        );
    }

    fetchData(keyword) {
        fetch(`http://openlibrary.org/search.json?q=${keyword}`)
            .then((response) => response.json())
            .then(
                (data) => {
                    const books = this.mapResults(data.docs);
                    this.setState({ results: books });
                }
            )
    }

    mapResults(results) {
        const booksWithCover = results.filter(results => results.has_fulltext);
        const ret = booksWithCover.map(
            result => {
                return {
                    title: result.title,
                    cover: `https://covers.openlibrary.org/b/id/${result.cover_i}.jpg`
                }
            }
        )
        return ret;
    }
    textChanged(event) {
        this.setState({ searchText: event.target.value });
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
            this.fetchData(this.state.searchText);
        }, 1000)

    }
}

export default Search;