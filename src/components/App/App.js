// Librairie
import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Composants
import Eleve from '../../Containers/Eleve/Eleve';
import { render } from '@testing-library/react';
import Articles from '../pages/articles';
function App() {
  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Salutation/>
       <Eleve />
       <Eleve nom="BOb"/>     
       <Welcome name='Jean' /> mon pote<Welcome></Welcome>  
      </header>
      <article>
        <Articles></Articles>
      </article>
    </div>
    </Router>
  );  
}
function Welcome({name,children}) { 
  return <div>
    <h1>Bonjour {name}</h1>
    <p>{children}</p>
    </div>
 }
class Salutation extends Component {
  render () {
    return (
      <div>
        Notes des élèves :
      </div>
    )
  }
  
}

export default App;
