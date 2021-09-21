import React,{useEffect} from 'react'

const MovieCard = (props) => {
    
    const getFullInfoById=async ()=>{
        const url=`https://www.omdbapi.com/?apikey=c1b97b66&i=${props.imdbID}`;
        let data=await fetch(url);
        let response=await data.json();
        console.log(response)
        props.setfullDetails(response)
        
    }
    return (
        <div>
            <div className="card my-3 mx-auto" style={{width: '18rem'}} onClick={getFullInfoById} style={{cursor:'pointer'}}>
                <img src={props.Poster} className="card-img-top" style={{objectFit:'cover',height:'20rem'}} />
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Title : {props.Title}<br /> Year of Release : {props.Year}<br/> Genre: {props.type}</small></p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
