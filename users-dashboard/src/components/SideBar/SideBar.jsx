
import './SideBar.css';
import logo from '../../BMW.png'
import { IconButton, InputBase } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';


export default function SideBar() {

    return (
        <div className="sidebar p-4">
            <img className='w-50 m-auto pt-3' src={logo} />
            <h3 className='my-4 text-start'>Dashboard</h3>
            <div className='fully-rounded bg-light mx-2' >
                <InputBase placeholder='search' />
                <IconButton type='button' aria-label='Search'>
                    <SearchOutlined />
                </IconButton>
            </div>
        </div>
    )
}