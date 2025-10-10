import './Backpacking.css'
import Travel from './Travel'

function Backpacking(){
    return(
        <>
            <Travel/>
            <div className='backpack'>
                <div className='booking'>
                    <div className='text'>
                        <div>
                            <h1>Backpacking Sri Lanka</h1>
                        </div>
                        <div>
                            <p>From <br /> $700</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Traveling is a unique experience as it's the best way to unplug from te pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living</p>

                        <button className='book'>Book Flight</button>
                    </div>
                </div>
                <div className='location'>
                    <img className='backpack-img' src="https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner__blog_post_banner/public/2021-01/Kirkjufell-volcano.jpg"/>
                    <img className='backpack-img' src="https://www.kayak.com/news/wp-content/uploads/sites/19/2024/02/c37659cf43b0fd45f3af7bc383072e02-scaled.jpg" />
                    <img className='backpack-img' src="https://www.travelandleisure.com/thmb/6LKBcNi2iFSiBdTpp_4xTqHenfg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-banff-national-park-BEAUTYCANADA0623-fc3b0496f842412f9a8299f8ffd18499.jpg"/>
                    <img className='backpack-img' src="https://media.timeout.com/images/106180837/image.jpg" />
                </div>
            </div>
        </>
    )
}

export default Backpacking