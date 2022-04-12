import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Effectapi = () => {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        // console.log("click")
        
            axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07f8aace2fca4227af67cccdf2a30653")
            .then((response) => {
                console.log(response)
                setUsers(response.data.articles)
            })
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <h2 className='p-2'>by useEffect</h2>
            <div className="container-fluid mt-5 mb-5" style={{background:'black'}}>
                <div className="row text-center">
                    {
                         users.map((value) => {
                            return (
                                
                                <div className="col-md-4">
                                    
                                
                                <div class="card mt-2 mb-2" style={{width: "18rem"}}>
                                    <img class="card-img-top" src={!value.urlToImage ? "logo192.png" : value.urlToImage}  alt="Card image cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.description}</p>
                                            <a href="#" className="small">{value.url}</a>
                                        </div>
                                </div>
                                </div>
                                
                            )
                        })
                    }



                </div>
            </div>

        </>
    )
}

export default Effectapi