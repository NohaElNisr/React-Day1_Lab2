import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/header';
import About from './AboutMe/aboutme';
import Skills from './Skills/skills';
import Portofolio from './Portofolio/portofolio';
import Footer from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <About/>
  <h1>Skills</h1>
    <Skills name="HTML" persentage="100%"/>
    <Skills name="Css" persentage="80%"/>
    <Skills name="Bootstrab" persentage="60%"/>
    <Skills name="Angular" persentage="40%"/>
    <hr></hr>
    <h1>Portofolio </h1>
    <div className="row">
     <div className="col-sm-6">
    <Portofolio name="Web Design" img="../src/img/pic.jpg"/>
    <Portofolio name="Mobile Design" img="../src/img/pic.jpg"/>
    <Portofolio name="Web Apps" img="../src/img/pic.jpg"/>
  </div>
  </div>
   <Footer/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
