import './Footer.css'
import { FaTelegram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import Subscribe from './Subscribe';


function Footer(){
    return(
        <>
        <Subscribe/>
            <div className='footer'>
                <div className='foot'>
                <div>
                    <div className="contacts">
                        <a href=""><FaTelegram size={20} style={{margin: "4px", cursor: "pointer", color: "black"}}/></a>
                        <a href=""><FaTwitter size={20} style={{margin: "4px", cursor: "pointer", color: "black"}}/></a>
                        <a href=""><FaYoutube size={20} style={{margin: "4px", cursor: "pointer", color: "black"}}/></a>
                        <a href=""><FaFacebook size={20} style={{margin: "4px", cursor: "pointer", color: "black"}}/></a>
                    </div>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <h4>Our Destinations</h4>
                    <ul>
                        <li><a href="">Canada</a></li>
                        <li><a href="">Alaska</a></li>
                        <li><a href="">France</a></li>
                        <li><a href="">Iceland</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Our Activities</h4>
                    <ul>
                        <li><a href="">Northern Lights</a></li>
                        <li><a href="">Crusing & Sailing</a></li>
                        <li><a href="">Multi-activities</a></li>
                        <li><a href="">Kayaying</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Travel Blogs</h4>
                    <ul>
                        <li><a href="">Bali Travel Guide</a></li>
                        <li><a href="">Sri Lang Travel Guide</a></li>
                        <li><a href="">Peru Travel Guide</a></li>
                        <li><a href="">Bali Travel Guide</a></li>
                    </ul>
                </div>
                <div>
                    <h4>About us</h4>
                    <ul>
                        <li><a href="">Our Story</a></li>
                        <li><a href="">Work with us</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact us</h4>
                    <ul>
                        <li><a href="">Our Story</a></li>
                        <li><a href="">Work with us</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer