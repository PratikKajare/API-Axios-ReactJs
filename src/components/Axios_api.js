import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Axios_api = () => {

    const [news, setNews] = useState([])

    const fetchData = () => {
        // console.log("click")
        axios.get("https://jsonplaceholder.typicode.com/photos")
        
        .then((response) => {
            console.log(response)
            setNews(response.data)
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row-1">
                    <h2>By Button Click</h2>
                    <button className='btn btn-danger right mb-5' onClick={fetchData}>Fetch Data</button>
                </div>
            </div>
            <div className="container-fluid mt-3" style={{background:'orange'}}>
                <div className="row">
                {
                    news.map((value) => {
                        return (
                            
                            <div className="col-md-2">
                                
                            
                            <div class="card mt-2 mb-2" style={{width: "12rem"}}>
                                <img class="card-img-top" src={!value.thumbnailUrl ? "logo192.png" : value.thumbnailUrl}  alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.title}</h5>
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

export default Axios_api