import './App.css';
import React,{Fragment} from 'react';
import Header from './components/layouts/Header';
import Meals from './components/meals/Meals';
function App() {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
