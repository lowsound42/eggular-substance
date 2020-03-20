import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import '../styles/main.scss';
import Loading from './Loading';
import Morn from './Morn';

function Main() {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 3000)
  });

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let hours = d.getHours();
  let minutes = d.getMinutes();

  return (
  <Router>
    {load ? <Link className='main' to='/morn'>
    <p className='main__date'>{months[month]} {day}</p>
    <p className='main__time'>{hours}:{minutes}</p>
    <p className='main__words'>Start Slow</p>
    </Link> : <Loading/>}
  
  <Switch>
    <Route exact path='/morn'>
      <Morn />
    </Route>  
  </Switch> 
  </Router>
  );
}

export default Main;
