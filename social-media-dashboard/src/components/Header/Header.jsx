import { useContext } from 'react'
import {ThemeContext} from '../../Context/ThemeContext'
import './Header.css'
export default function Header() {

    const{theme, toggle} = useContext(ThemeContext);
    return (

        <div className={`Header ${theme}-text ${theme}-bg`}>
            <div className="container">
                <div className="row">
                    <div className='d-flex justify-content-between align-items-center py-3'>
                        <div>
                            <h3 className="mb-0">Social media dashboard</h3>
                            <span className="text-color fw-bold">Total followers: 23,004</span>
                        </div>
                        <div className='d-flex'>
                            <label htmlFor="">Dark mode</label>
                            <div onClick={()=>toggle()} className={`theme-switch ${theme}-switch ms-2`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}