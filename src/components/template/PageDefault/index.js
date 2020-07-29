import React from 'react';
import Menu from '../../Menu';
import Footer from '../../Footer';
import { Main } from './styles'
function PageDefault({ children }) {
  return (
    <React.Fragment>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default PageDefault;