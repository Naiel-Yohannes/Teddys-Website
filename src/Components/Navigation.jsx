import { FaPlane, FaBed } from 'react-icons/fa';
import './Nav.css';
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        
        <nav className="nav-bar">
            <div className="container">
                <div>
                    <img className='logo' src="https://t3.ftcdn.net/jpg/05/05/65/32/360_F_505653207_AU1xdTtSKIstU0PtH8kInlkrSj5BGxvl.jpg" alt="LOGO" />
                </div>
                <div className="nav-links">
                    <ul className='nav-links'>
                        <li><Link to="/"><FaPlane /> Find Flight</Link></li>
                        <li><Link to="/stays"><FaBed /> Find Stays</Link></li>
                        
                    </ul>
                </div>
            </div>
            </nav>
            
    )
}

export default Navigation