import './Subscribe.css'

function Subscribe(){
    return(
        <div className='subscribe'>
            <div className='sub'>
                <h1>Subscribe Newsletter</h1>
                <h2>The Travel</h2>
                <p>Get inspired! Recieve Travel discounts, Tips and Behind the scene stories.</p>
                <input className='email-inp' type="text" placeholder='Your Email Address'/>
                <button className='submit'>Subscribe</button>
                
            </div>
            <div>
                <img className='sub-img' src="https://cdn-icons-png.flaticon.com/512/3382/3382278.png" alt="" />
            </div>
        </div>
    )
}

export default Subscribe