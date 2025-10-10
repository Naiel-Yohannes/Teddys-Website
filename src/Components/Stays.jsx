import Searches from './Searches'
import FlyingStays from './FlyingStays' 
import Places from './Places'  
import Backpacking from './Backpacking'
import Footer from './Footer'  

function Stays(){
    const staysStyles = {
        backgroundImage: `linear-gradient(90deg, rgba(15, 55, 68, 0.8) 0%, rgba(173, 216, 230, 0) 100%), url("https://cdn.shopify.com/s/files/1/0080/0984/2786/files/shutterstock_1181523733.jpg?v=1655221599")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '85vh',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
    
    };

    const staysContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '70%',
        marginLeft: '8%'
    };

    return(
        <>
        <section style={staysStyles}>
            <div style={staysContentStyle}>
                <h1 style={{fontSize: "48px", width: "40%"}}>Make your travels whishlist, We'll do the rest</h1>
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