import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Error404 from './pages/Error 404';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/cadastro/video" exact component={CadastroVideo} />
        <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
