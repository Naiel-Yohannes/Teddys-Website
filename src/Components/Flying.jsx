import './Flying.css'
import { FaPaperPlane } from 'react-icons/fa';

function Flying(){
    
    return(
        <section className='flying'>
            <h2>Where are you flying?</h2>
            <div className='flying-content'>
                <form className='form'>               
                    <fieldset className="from" style={{padding: "4px 55px"}}>
                        <legend>From-To</legend>
                        <p>Lahore - Karachi</p>
                    </fieldset>
                                            
                    <fieldset className='trip'>
                        <legend className='trip'>Trip</legend>
                        <select id="trip">
                            <option value="Return">Return</option>
                            <option value="America">America</option>
                            <option value="England">England</option>                    
                            <option value="France">France</option>
                        </select>    
                    </fieldset>                  
                    
                    <fieldset className='depart'>
                        <legend className='depart-return'>Depart - Return</legend>
                        <input className='input' type="date" id='depart-return'/>
                    </fieldset>
                                      
                    <fieldset className='passenger'>
                        <legend className='passenger-class'>Passenger - Class</legend>
                        <input className='input pas-inp' type="text" id='passenger-class' placeholder='1 Passenger...'/>
                    </fieldset>                
                </form>
                <div className='final'>
                    <button className='promo'>+ Add Promo Code</button>
                    <button className='flights'><FaPaperPlane /> Show Flights</button>
                </div>
            </div>
        </section>
    )
}

export default Flying