import React from 'react';
import SiteNav from './SiteNav';
import AppIntro from './AppIntro';

const Header = () => {
  return (
    <div className="Header">
      <SiteNav/>
      <AppIntro/>
    </div>
  )
}

export default Header;
