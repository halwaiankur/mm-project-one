import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/code-exercise.scss';
import BannerSection from './Components/BannerSection';
import HeaderSection from './Components/HeaderSection';
import ImageCarousel from './Components/ImageCarousel';

class App extends Component {
  render() {
    return (
    <div className="">
      <HeaderSection />
      <div className="container">
        <BannerSection />
          <ImageCarousel />
      </div>
    </div>
    );
  }
}

export default App;
