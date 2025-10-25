import './Home.css'
import Searches from './Searches'
import FlyingStays from './FlyingStays' 
import Places from './Places'  
import Backpacking from './Backpacking'
import Footer from './Footer'  

function Stays(){
    const staysStyles = {
        backgroundImage: `linear-gradient(90deg, rgba(15, 55, 68, 0.8) 0%, rgba(173, 216, 230, 0) 100%), url("https://cdn.shopify.com/s/files/1/0080/0984/2786/files/shutterstock_1181523733.jpg?v=1655221599")`,
    };

    return(
        <>
        <section className='hero' style={staysStyles}>
            <div className='hero-content'>
                <h1>Make your travels whishlist, We'll do the rest</h1>
                <p>Special offers to suit your plans</p>
            </div>
        </section>
        <FlyingStays/>
        <Searches/>
        <Places/>
        <Backpacking/>
        <Footer/>
        </>
    )
}

export default Stays