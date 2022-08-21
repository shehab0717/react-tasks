import React from 'react';

class SearchBtn extends React.Component{

    render(){
        return(
            <button className="search-btn" onClick={this.props.onclick}>+Book</button>
        )
    }
}

export default SearchBtn;