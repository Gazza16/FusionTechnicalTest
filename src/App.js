import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Table from './Components/Table';
import data from './Data/wellness.json';
import Background from './Components/Background.jpg'
import './App.css';



class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <h1>The wellness report</h1>

          <h2>Welcome</h2>

          <p>The wellness report is the latest in sports technology providing atheletes perrformance <br />
           data to ensure their bodies recooperate as fast as possibe.</p>



           <button><Link to="/Table">LOAD THE DATA!</Link></button>
<br />
<br />
           <Route path="/Table" exact render={
             () => {
               return (<Table data={data}/>);
             }
           } />

      </div>
    </Router>
)
}
}

export default App;
