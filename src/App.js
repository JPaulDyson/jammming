import React from 'react';
import './App.css';
import Header from './Header/Header';
import Panels from './Panels/Panels';
import GetAccessToken from './Spotify/GetAccessToken';
import LoadingScreen from './LoadingScreen/LoadingScreen'

function App() {

  GetAccessToken();

  return (
    <div className="App">
      <LoadingScreen />
      <Header />
      <Panels GetAccessToken={GetAccessToken} />
    </div>
  );
}

export default App;
