import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import BookDetails from '../components/BookDetails';

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
                        <Route path='/details/:bookId' element={<BookDetails />} />
                    </Routes>
                </BrowserRouter>
                <Outlet />
            </>
        )
    }
}

export default Layout;