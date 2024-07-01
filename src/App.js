import './App.css';
import Header from './Header/Header';
import Search from './Search/Search';
import Panels from './Panels/Panels';

const tracks = [
  {
    name: "Hallowed Be Thy Name",
    artist: "Iron Maiden",
    album: "The Number Of The Beast",
    uri: "spotify:track:10001",
    id: 10001
  },
  {
    name: "Run To The Hills",
    artist: "Iron Maiden",
    album: "The Number Of The Beast",
    uri: "spotify:track:10002",
    id: 10002
  },
  {
    name: "The Evil That Men Do",
    artist: "Iron Maiden",
    album: "Seventh Son Of A Seventh Son",
    uri: "spotify:track:10003",
    id: 10003
  },
  {
    name: "Fiction",
    artist: "Avenged Sevenfold",
    album: "Nightmare",
    uri: "spotify:track:10004",
    id: 10004
  },
  {
    name: "Master Of Puppets",
    artist: "Metallica",
    album: "Master Of Puppets",
    uri: "spotify:track:10005",
    id: 10005
  }
];

const playlist = {
  name: "My Current Songs",
  tracks: [
    {
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "Night At The Opera",
      uri: "spotify:track:20001",
      id: 20001
    },
    {
      name: "The Kids Aren't Alright",
      artist: "The Offspring",
      album: "Americana",
      uri: "spotify:track:20002",
      id: 20002
    },
    {
      name: "Low Man's Lyric",
      artist: "Metallica",
      album: "Reload",
      uri: "spotify:track:20003",
      id: 20003
    },
    {
      name: "Until It Sleeps",
      artist: "Metallica",
      album: "Load",
      uri: "spotify:track:20004",
      id: 20004
    },
    {
      name: "Victory",
      artist: "Megadeth",
      album: "Youthanasia",
      uri: "spotify:track:20005",
      id: 20005
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <main>
        <Panels tracks={tracks} playlist={playlist} />
      </main>
    </div>
  );
}

export default App;
