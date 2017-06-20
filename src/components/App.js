import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Themes from './Themes';

const theme = Themes['main'];

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header/>
            <main className="main-content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </main>
            <Footer/>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
