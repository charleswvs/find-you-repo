import React from 'react';
import './App.css';
import Routes from './routes';

// Ponto de entrada da aplicação, renderiza as rotas que serão exibidas.
function App() {
  return (
    <div className="main">
      <Routes />
    </div>
  );
}

export default App;
