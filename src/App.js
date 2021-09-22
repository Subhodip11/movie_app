import React,{useState} from 'react'
import MovieCardFullDetails from './Components/MovieCardFullDetails';
import MovieSection from './Components/MovieSection'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import Progress from '@ramonak/react-progress-bar';

const App = () => {
  const apiKey=process.env.REACT_APP_MOVIE_API_KEY;
  const [searchValue, setsearchValue] = useState('');
  const [fullDetails, setfullDetails] = useState([]);
  const [progress, setprogress] = useState(0);
  const [showProgress, setshowProgress] = useState(false);
  const closeContainer=()=>{
    setfullDetails([]);
  }
  console.log("fullDetails :"+fullDetails);
    return ( 
    <div>
    <Router>
     {showProgress && <Progress 
       completed={progress}
       borderRadius='0'
       height='0.2rem'
       isLabelVisible={false}
       bgColor='red'
      />}
      <NavBar searchValue={searchValue} setsearchValue={setsearchValue} />
      <Switch>
      <Route key='/' exact path='/'>
     {fullDetails.length===0?"":<MovieCardFullDetails fullDetails={fullDetails} closeContainer={closeContainer}/>}
      <MovieSection apiKey={apiKey} type={'movies'} searchedValue={searchValue} fullDetails={fullDetails} setfullDetails={setfullDetails} progress={setprogress} showProgress={setshowProgress}/>
      </Route>
      
      <Route key='series' exact path='/series'>
     {fullDetails.length===0?"":<MovieCardFullDetails fullDetails={fullDetails} closeContainer={closeContainer}/>}
      <MovieSection apiKey={apiKey} type={'series'} searchedValue={searchValue} fullDetails={fullDetails} setfullDetails={setfullDetails} progress={setprogress} showProgress={setshowProgress}/>
      </Route>
      
      <Route key='episodes' exact path='/episodes'>
     {fullDetails.length===0?"":<MovieCardFullDetails fullDetails={fullDetails} closeContainer={closeContainer}/>}
      <MovieSection apiKey={apiKey} type={'episodes'} searchedValue={searchValue} fullDetails={fullDetails} setfullDetails={setfullDetails} progress={setprogress} showProgress={setshowProgress}/>
      </Route>
      </Switch>
     </Router>
    </div>
    )
}

export default App