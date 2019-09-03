import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import SideNavPage from './components/SideNavPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header/>
        <SideNavPage />
    </div>
  );
}

export default App;
