import React from 'react'
import { withRouter } from 'react-router-dom'

import homeIconBlack from '../../assets/home_black.png'
import homeIconWhite from '../../assets/home_white.png'
import './GoHome.css'

const GoHome = (props) => {
  const { location } = props;
  const isHomePage = location.pathname === '/';

  const navigateToHome = () => {
    const { history } = props;
    history.push('/');
  };

  return (
    <button className={`go-home-btn ${isHomePage ? 'white-bkg' : 'gradient-bkg'}`}
      onClick={navigateToHome}
    >
      <img className='home-icon'
        src={isHomePage ? homeIconBlack : homeIconWhite}
        alt='home-icon'
      />
    </button>
  )
}

export default withRouter(GoHome)