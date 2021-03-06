import './App.css';
import React, { Component } from 'react';
import MainPage from './components/MainPage/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="appContainer">
        <ToastContainer />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
