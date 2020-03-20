import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import '../styles/main.scss';
import Loading from './Loading';
import Sun from '../assets/sun.png';

function Main() {

  const API_SECRET = '67623d3371216d7cd41118db1ca9ee5b';

  async function fetchWeather() {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_SECRET}/43.6532,-79.3832`)
    res.json()
      .then(res => {
        console.log(res);
        let ftoc = Math.round((res.currently.temperature - 32) * 5 / 9);
        console.log(ftoc);   
        setTemp(ftoc);
        setCond(res.currently.summary);
      })
      .catch(() => console.log('error!!'))
  }

  useEffect(() => {
    fetchWeather();
  }, []);


  const [load, setLoad] = useState(false);
  const [temp, setTemp] = useState('loading');
  const [cond, setCond] = useState('loading');
  const [page, setPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 3000)
  });

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  let d = new Date();
  let day = d.getDate();
  let today = d.getDay();
  let month = d.getMonth();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  if (hours > 12) {
    hours = hours - 12;
  }

  return (
    <>
    {load ? <div className={page ? `main` : `altmain`} onClick={() => setPage(false)}>
    <p className={page ? `main__date` : 'inviso'}>{months[month]} {day}</p>
    <p className={page ? `main__time` : 'inviso'}>{hours}:{minutes} {ampm}</p>
    <p className={page ? `main__words` : 'inviso'}>Start Slow</p>
    <p className={page ? 'inviso': 'altmain__morning'}>Good Morning</p>
    <div className={page ? 'inviso':'altmain__weather'}>
      <div className={page ? 'inviso':'altmain__weather-date'}>Today is {days[today-1]}</div>
      <div className={page ? 'inviso':'altmain__weather-temp'}>
        <img className={page ? 'inviso':'altmain__weather-temp--img'} src={Sun}/>
        <div className={page ? 'inviso':'altmain__weather-temp--vals'}>
          <div className={page ? 'inviso': 'altmain__weather-temp--vals_1'}>{temp}C</div>
          <div className={page ? 'inviso': 'altmain__weather-temp--vals_2'}>{cond}</div>
        </div>
      </div>
    </div>
    </div> : <Loading/>}
  </>
  );
}

export default Main;
