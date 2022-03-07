import React from 'react';
import logoheader from '../../../../Assets/Images/logoBLack.png';
import '../../../../Styles/Header/Togglebtn.css';

function navbarmobile() {
    
    const navbarlinks = document.getElementsByClassName("navbar-links")[0];

    const bar1 = document.getElementById('bar1')[0];
    const bar2 = document.getElementById('bar2')[0];
    const bar3 = document.getElementById('bar3')[0];

    navbarlinks.classList.toggle('active');

    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');

}

function Togglebtn() {

  return (
    <>
    
      <img src={logoheader} alt='logo-head' className='logo-head' title='logo-head'/>

      <span className='toggle-button' onClick={navbarmobile}>
        
        <span id='bar1'></span>
        <span id='bar2'></span>
        <span id='bar3'></span>

        </span>
    
    </>
  )
}

export default Togglebtn;