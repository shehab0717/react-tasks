import React from "react";

class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="d-flex flex-row py-4">
                    <div>
                        <input className="form-control" type="text" name="" id="search-box" />
                    </div>
                    <div>
                        <input className="btn btn-primary mx-3" type="submit" value="Search" />
                        <button className="btn btn-sm btn-outline-danger" onClick={this.props.cancelSearch}>cancel</button>
                    </div>
                </div>
                <div className="search-results">

                </div>
            </>
        );
    }
}

export default Search;