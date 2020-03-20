import React from 'react';
import '../styles/loading.scss';
import Egg from '../assets/egg-guy.png';

function Loading() {
  return (
    <>
  <div className='loading'>
      <img className='loading__image' src={Egg}/>
  </div>
    </>
  );
}

export default Loading;
