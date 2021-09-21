import React from 'react'

const MovieCardFullDetails = (props) => {
    return (
        <div>
            <div className="card my-3 mx-3" style={{ maxWidth: "33.75rem;" }}>
                <div className="conatiner d-flex justify-content-end">
                    <button type="button" className="btn-close " aria-label="Close" onClick={props.closeContainer}></button>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.fullDetails.Poster} className="img-fluid rounded-start my-2 mx-3" alt="..." style={{objectFit:'cover',maxHeight:'300px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.fullDetails.Title}</h5>
                            <p className="card-text">{props.fullDetails.Plot}</p>
                            <hr />
                            <p className="card-text"><h5 className='card-title' style={{display:'inline'}}>Writers :  </h5>{props.fullDetails.Writer}</p>
                            <hr />
                            <p className="card-text"><h5 className='card-title' style={{display:'inline'}}>Actors :  </h5>{props.fullDetails.Actors}</p>
                            <hr />
                            <p className="card-text"><small className="text-muted">Released On {props.fullDetails.Released}</small></p>
                            <p className="card-text"><small className="text-muted">IMDB Rating : {props.fullDetails.imdbRating}/10 based on {props.fullDetails.imdbVotes} votes</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//{Poster,Plot,Genre,Actors,Title,Year,Runtime,Lang,Writer,imdbRating,Released}
export default MovieCardFullDetails
