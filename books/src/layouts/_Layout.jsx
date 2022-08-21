import React from 'react';
import SearchBtn from '../components/SearchBtn';

class Layout extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search: false
        }
    }

    toggleSearch(){
        this.setState({
            search: !this.state.search
        })
    }

    render(){
        return (
            <div className='container px-5'>
                {this.props.children}
                <SearchBtn />
            </div>
        )
    }
}

export default Layout;