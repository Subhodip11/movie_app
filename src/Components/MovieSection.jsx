import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard';

const MovieSection = (props) => {
     const [MovieInfo, setMovieInfo] = useState([]);
     if(props.type==='movies')
     document.title=`Movies Section- MFUD`
     if(props.type==='series')
     document.title=`Series Section- MFUD`
     if(props.type==='episodes')
     document.title=`Episodes Section- MFUD`
     
     const apiCall=async ()=>{
         props.showProgress(true);
         props.progress(10);
         const url=props.type==='movies'?`https://www.omdbapi.com/?apikey=${props.apiKey}&s=${props.searchedValue}`:`https://www.omdbapi.com/?apikey=c1b97b66&type=${props.type}&s=${props.searchedValue}`
         props.progress(30);
         let data=await fetch(url);
         props.progress(50);
         let response=await data.json();
         let movieData=response['Search']
         console.log(movieData,url);
         setMovieInfo(movieData);
         props.progress(100);
         setTimeout(() => {
             props.showProgress(false)
         }, 2000);
     }
    
     useEffect(() => {
         apiCall();
     }, [props.searchedValue])
    return (
        <div className="container mx-auto">
        <div className='row'>
           {MovieInfo?MovieInfo.map((element,index)=>{
               return <div className="col-md-4" key={index}> 
               <MovieCard   Title={element.Title} Year={element.Year} Poster={element.Poster} imdbID={element.imdbID} fullDetails={props.fullDetails} setfullDetails={props.setfullDetails} type={props.type}/>
               </div>
           }):(props.searchedValue.length===0?<h4>Searched {props.type} are displayed here</h4>:<h4>No match Found</h4>)}   
        </div>
        </div>
    )
}

export default MovieSection
