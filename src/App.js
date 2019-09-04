import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import SideNavPage from './components/SideNavPage'
import Header from './components/Header'
import List from './components/List'



function App() {
  return (
    <div className="App">
      <Header/>
      <SideNavPage />
     
      <List />
    </div>
  );
}

export default App;
