import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home/Landing';
import Movie from './components/home/movie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route path="/movies/:id" component={Movie} />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
