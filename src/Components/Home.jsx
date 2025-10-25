import './Home.css'
import Flying from './Flying'  
import Places from './Places'  
import Backpacking from './Backpacking'
import Global from './Global'  
import Footer from './Footer'  

function Home(){
    const homeStyles = {
        backgroundImage: `linear-gradient(90deg, rgba(15, 55, 68, 0.8) 0%, rgba(173, 216, 230, 0) 100%), url("https://t3.ftcdn.net/jpg/06/46/20/52/360_F_646205247_k4zVBz5tdHv5EUTfy56JxsTmB5nRip5c.jpg")`,
    };

    return(
        <>
        <section style={homeStyles} className='hero'>
            <div className='hero-content'>
                <h1>Make your travels whishlist, We'll do the rest</h1>
                <p>Special offers to suit your plans</p>
            </div>
        </section>
        <Flying/>
        <Global/>
        <Places/>
        <Backpacking/>
        <Footer/>
        </>
    )
}

export default Home