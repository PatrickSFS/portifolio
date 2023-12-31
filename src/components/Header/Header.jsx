import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header'>
      <Navbar />
      <div>
        <h1>Olá <span>emoji,</span></h1>
        <h2>Sou Desenvolvedor Web</h2>
        <p>Eu construo aplicações para Web</p>
        <div className='icon-Wrapper'>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className='resume-wrapper'>
          <p>12 projetos finalizados</p>
          <div className='icon-tec-Wrapper'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
