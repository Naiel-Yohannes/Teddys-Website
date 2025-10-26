import Travel from "./Travel";
import './Places.css'

function Places(){
    const place = [{
        img: "https://www.cruiseandtravel.co.uk/_gatsby/file/4b9f6add774f6a00098fdfa2f32d358f/98543_iStock-876026224-1024x705.jpg",
        text: "Melborne",
        price: "$700",
        description: "An amazing journey"
    },
    {
        img: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_1:1,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/paris/3%20giorni%20a%20Parigi%20Tour%20Eiffel?_a=BAVAZGE70",
        text: "Paris",
        price: "$600",
        description: "A paris adventure"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15KuyX3PnbHmc1JkIkE8gGKYmvSP4GZNvaQ&s",
        text: "London",
        price: "$350",
        description: "London eye adventure"
    },
    {
        img: "https://uncovercolombia.com/site/assets/files/1715/cartagena-colombia-vacations.jpg?3408rz",
        text: "Columbia",
        price: "$700",
        description: "Amazing streets"
    }
    ]


    return(
        <>
        <Travel/>
        <section className="places">
            
            
                {place.map((element, index)=>(
                <div key={index} className="places-content">
                    <img src={element.img} alt={element.text} />
                    <div>
                        <h2>{element.text}</h2>
                        <p>{element.description}</p>
                    </div>
                    <div>
                        <h2>{element.price}</h2>
                    </div>
                    <button>Book Flight</button>
                </div>                    
                ))}
        </section>
        </>
    )
}

export default Places