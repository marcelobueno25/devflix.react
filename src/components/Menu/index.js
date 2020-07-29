import React from 'react';
import logo from '../../assets/devflix.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="logo devflix" />
      </Link>
      <Button className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}


export default Menu;