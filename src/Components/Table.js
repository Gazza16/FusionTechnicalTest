import React, { Component } from 'react';
import App from '../App.js'
import data from '../Data/wellness.json';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';

class Table extends Component {

  render() {
    return (
      <Router>
      <div>
      <Router path="/" exact render={
        () => {
          return (<App />);
        }
      } />


          <table>
            <thead>
                <th colspan="3">Wellness Report</th>
                <tr>
                    <th>Athlete</th>
                    <th>Muscle-soreness</th>
                    <th>Sleep-quality</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>{data.athlete.map(name => <div>{name}</div>)}</td>
                    <td>{data["muscle-soreness"].map(number => <div>{number}</div>)}</td>
                    <td>{data["sleep-quality"].map(number => <div>{number}</div>)}</td>
                </tr>
            </tbody>

          </table>
       </div>
       </Router>
)
}
}
export default Table;
