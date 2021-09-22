import React from 'react'

const MovieCard = (props) => {
    const apiKey=process.env.REACT_APP_MOVIE_API_KEY;
    const getFullInfoById=async ()=>{
        const url=`https://www.omdbapi.com/?apikey=${apiKey}&i=${props.imdbID}`;
        let data=await fetch(url);
        let response=await data.json();
        console.log(response)
        props.setfullDetails(response)
        
    }
    return (
        <div>
            <div className="card my-3 mx-auto" style={{width: '18rem'}} onClick={getFullInfoById} style={{cursor:'pointer'}}>
                <img alt='Sorry!!Source Not Found' src={props.Poster} className="card-img-top" style={{objectFit:'cover',height:'20rem'}} />
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Title : {props.Title}<br /> Year of Release : {props.Year}<br/> Genre: {props.type}</small></p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
