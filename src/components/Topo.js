import React from 'react';
import Logo from './Logo';
import Navegacao from './Navegacao';

const Topo = () => {
  return (
    <header className="header">
      <Logo />
      <Navegacao />
    </header>
  );
};
export default Topo;