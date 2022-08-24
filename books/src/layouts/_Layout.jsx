import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '../components/Home';
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

        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                </BrowserRouter>
                <Outlet />
            </>
        )
        
        // return this.state.search
        //     ? <Search cancelSearch={this.toggleSearch}/>
        //     :
        //     <div className='container px-5'>
        //         {this.props.children}
        //         <SearchBtn onclick={this.toggleSearch} />
        //     </div>
    }
}

export default Layout;