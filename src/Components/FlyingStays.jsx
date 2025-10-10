import './Flying.css'
import { FaPaperPlane, FaBed, FaUserCircle, FaBuilding } from 'react-icons/fa';

function FlyingStays(){
    
    return(
        <section className='flying'>
            <h2>Where are you flying?</h2>
            <div className='flying-content'>
                <form className='form'>               
                    <fieldset className="from" style={{padding: "4px 45px"}}>
                        <legend>Enter Destination</legend>
                        <p ><FaBed style={{marginRight: "15px"}}/>Istanbul - Turkey</p>
                    </fieldset>
                                            
                    <fieldset className='checkin'>
                        <legend className='checkin'>Check in</legend>
                        <input type="date" id='checkin' className='input'/>
                    </fieldset>                  
                    
                    <fieldset className='checkout'>
                        <legend className='checkout'>Check out</legend>
                        <input type="date" id='checkout' className='input'/>
                    </fieldset>  
                                      
                    <fieldset className='passenger'>
                        <legend className='room'>Rooms & Guests</legend>
                        <select id="room">
                            <option value="">One room - 2 guests</option>
                            <option value="">One room - 3 guests</option>
                            <option value="">Two room - 2 guests</option>                    <option value="">Two room - 3 guests</option>
                        </select>
                    </fieldset>                
                </form>
                <div className='final'>
                    <button className='promo'>+ Add Promo Code</button>
                    <button className='flights'><FaBuilding /> Show Flights</button>
                </div>
            </div>
        </section>
    )
}

export default FlyingStays