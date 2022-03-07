import React from 'react';
import Navlists from './Navlists/Navlists';
import '../../../Styles/Header/Navbar.css';
import Togglebtn from './Togglebtn/Togglebtn';

function Navbar({lang}) {
  return (
    <nav className='navbar'>

        <Togglebtn lang={lang}/>
        <Navlists lang={lang}/>
    
    </nav>
  )
}

export default Navbar;