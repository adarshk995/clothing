import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepages/homepage.component';

const Covid19Essential = () => (

  <div>
    <h1> COVID19 ESSENTIAL </h1>
  </div>
)

function App() {
  return( 
    <div> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Covid19' component={Covid19Essential} />    
      </Switch>
    </div>
  );
}

export default App;
