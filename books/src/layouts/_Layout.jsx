import React from 'react';
import Search from '../components/Search';
import SearchBtn from '../components/SearchBtn';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: false
        }
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
        this.setState({
            search: !this.state.search
        })
    }

    render() {
        return this.state.search
            ? <Search cancelSearch={this.toggleSearch}/>
            :
            <div className='container px-5'>
                {this.props.children}
                <SearchBtn onclick={this.toggleSearch} />
            </div>
    }
}

export default Layout;