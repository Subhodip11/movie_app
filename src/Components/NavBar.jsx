import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid d-flex justify-content-between align-items-center">
      <MovieCreationRoundedIcon color='primary' style={{margin: '0rem 1rem'}} />
    <a className="navbar-brand" href="/" style={{fontFamily:`'cursive'`,fontSize:'1.3rem'}}>Movies For U</a>   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li><Link to='/' style={{textDecoration:'none',margin:'0 0.5rem'}}>Movies</Link></li>
        <li><Link to='/series' style={{textDecoration:'none',margin:'0 0.5rem'}}>Series</Link></li>
        <li><Link to='/episodes' style={{textDecoration:'none',margin:'0 0.5rem'}}>Episodes</Link></li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" value={props.searchValue} onChange={(event)=>{props.setsearchValue(event.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    )
}

export default NavBar
