import React, { useState, useEffect } from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Effectapi = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)
    const fetchData = async () => {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&page=${page}&pagesize=10&apiKey=07f8aace2fca4227af67cccdf2a30653`)
            .then((response) => {
                console.log(response)
                setUsers(response.data.articles)
                setPage(page+1) 
                setUsers(users.concat(response.data.articles))
                setTotalResults(response.totalResults)
            })
            
            
    }

    useEffect(() => {
        fetchData();
    }, []);
    // const fetchMoreData = async () => {   
    //     const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&page=${page}&apiKey=07f8aace2fca4227af67cccdf2a30653`;
    //     setPage(page+1) 
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setUsers(users.concat(parsedData.data.articles))
    //     setTotalResults(parsedData.totalResults)
    //   };
    return (
        <>
            <h2 className='p-2'>by useEffect</h2><small>this api(NewsApi) work only on Localhost</small>
            <div className="container-fluid mt-5 mb-5" style={{ background: 'black' }}>
                <InfiniteScroll
                    dataLength={users.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={users.length !== totalResults}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    
                >
                    <div className="row text-center">
                        {
                            users.map((value) => {
                                return (

                                    <div className="col-md-4">


                                        <div class="card mt-2 mb-2" style={{ width: "18rem" }}>
                                            <img class="card-img-top" src={!value.urlToImage ? "logo512.png" : value.urlToImage} alt="Card image cap" />
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
                    </InfiniteScroll>
            </div>

        </>
    )
}

export default Effectapi