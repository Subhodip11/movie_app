import React,{useState} from 'react'
import MovieCardFullDetails from './Components/MovieCardFullDetails';
import MovieSection from './Components/MovieSection'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
const App = () => {
  const [searchValue, setsearchValue] = useState('');
  const [fullDetails, setfullDetails] = useState([]);
  const closeContainer=()=>{
    setfullDetails([]);
  }
  console.log("fullDetails :"+fullDetails);
    return ( 
    <div>
    <Router>
      <NavBar searchValue={searchValue} setsearchValue={setsearchValue} />
      <Switch>
      <Route key='/' exact path='/'>
     {fullDetails.length===0?"":<MovieCardFullDetails fullDetails={fullDetails} closeContainer={closeContainer}/>}
      <MovieSection type={'movies'} searchedValue={searchValue} fullDetails={fullDetails} setfullDetails={setfullDetails}/>
      </Route>
      
      <Route key='series' exact path='/series'>
     {fullDetails.length===0?"":<MovieCardFullDetails fullDetails={fullDetails} closeContainer={closeContainer}/>}
      <MovieSection type={'series'} searchedValue={searchValue} fullDetails={fullDetails} setfullDetails={setfullDetails}/>
      </Route>
      
      <Route key='episodes' exact path='/episodes'>
     {fullDetails.length===0?"":<MovieCardFullDetails fullDetails={fullDetails} closeContainer={closeContainer}/>}
      <MovieSection type={'episodes'} searchedValue={searchValue} fullDetails={fullDetails} setfullDetails={setfullDetails}/>
      </Route>
      </Switch>
     </Router>
    </div>
    )
}

export default App