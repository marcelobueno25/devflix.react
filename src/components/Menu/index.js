import React from 'react';
import logo from '../../assets/devflix.png'
import Button from '../Button'
import './style.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="logo devflix" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}


export default Menu;