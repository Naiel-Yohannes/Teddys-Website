import "./Searches.css"

function Searches(){
    const history = [{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNgb_MsocY1-c75czMqmxsJicIpDsmjly5Q&s",
        location: "Istanbul, Turkey",
        places: "325 places"
    },{
        img: "https://hips.hearstapps.com/hmg-prod/images/cala-corsara-beach-sardinia-island-italy-royalty-free-image-1738599302.pjpeg?crop=0.668xw:1.00xh;0.0160xw,0&resize=1120:*",
        location: "Sydney, Australia",
        places: "325 places"
    },{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8fWKS4bx7L-gLLNjpEKDvCFeuVcdSYT3YQ&s",
        location: "Bagu, Azeybajan",
        places: "325 places"
    },{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDswcxObf3lxloKdkjZ-Cek6nKJeqV4USKyQ&s",
        location: "Male, Maldeves",
        places: "325 places"
    },
    ]

    return(
        <section className="search">
            <h2>Your recent searches</h2>
            <div className="searches" >
                {history.map((element, index)=>(
                    <div key={index} className="s-content">
                        <img className="s-img" src={element.img} alt={element.location} />
                        <div>
                            <h4>{element.location}</h4>
                            <p>{element.places}</p>
                        </div> 
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Searches