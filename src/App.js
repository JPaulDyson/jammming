import React from 'react';
import './App.css';
import Header from './Header/Header';
import Panels from './Panels/Panels';
import GetAccessToken from './Spotify/GetAccessToken';

// const playlist = {
//   name: "My Current Songs",
//   tracks: [
//     {
//       name: "Bohemian Rhapsody",
//       artists: "Queen",
//       album: "Night At The Opera",
//       uri: "spotify:track:20001",
//       id: "20001"
//     },
//     {
//       name: "The Kids Aren't Alright",
//       artists: "The Offspring",
//       album: "Americana",
//       uri: "spotify:track:20002",
//       id: "20002"
//     },
//     {
//       name: "Low Man's Lyric",
//       artists: "Metallica",
//       album: "Reload",
//       uri: "spotify:track:20003",
//       id: "20003"
//     },
//     {
//       name: "Until It Sleeps",
//       artists: "Metallica",
//       album: "Load",
//       uri: "spotify:track:20004",
//       id: "20004"
//     },
//     {
//       name: "Victory",
//       artists: "Megadeth",
//       album: "Youthanasia",
//       uri: "spotify:track:20005",
//       id: "20005"
//     }
//   ]
// };

function App() {

  GetAccessToken();

  return (
    <div className="App">
      <Header />
      <Panels GetAccessToken={GetAccessToken} />
    </div>
  );
}

export default App;
