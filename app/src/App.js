import React from 'react';
import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import { Title, Info } from './components/Styles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>MAGIC the GATHERING</Title>
        <Info>
          <Card />
          <CardList />
        </Info>
      </header>
    </div>
  );
}

export default App;