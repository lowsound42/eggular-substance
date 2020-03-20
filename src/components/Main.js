import React, {useEffect, useState} from 'react';
import '../styles/main.scss';
import Loading from './Loading';

function Main() {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 3000)
  });

  return (
    load ? <div className="App">
    <header className="App-header">
      <p>
        Future home of EGG prototype
      </p>
    </header>
  </div> : <Loading/> 
  );
}

export default Main;
