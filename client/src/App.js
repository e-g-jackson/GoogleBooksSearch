import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './assets/Header';
import SearchBar from "./assets/SearchBar";
import SavedBooks from "./assets/SavedBooks"
// import Results from "./assets/Results"
import './App.css';

class App extends Component {
  
  state = {
    data: null
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact = {true} path = "/" component={SearchBar}>
            {/* <SearchBar /> */}
          </Route>
          <Route exact = {true} path = "/saved" component = {SavedBooks}>
            {/* <SavedBooks /> */}
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
