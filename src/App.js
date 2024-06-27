import './App.css';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Search from './Search/Search';
import SearchResults from './SearchResults/SearchResults';

const tracks = [
  {
    name: "Hallowed Be Thy Name",
    artist: "Iron Maiden",
    album: "The Number Of The Beast",
    id: 10001
  },
  {
    name: "Run To The Hills",
    artist: "Iron Maiden",
    album: "The Number Of The Beast",
    id: 10002
  },
  {
    name: "The Evil That Men Do",
    artist: "Iron Maiden",
    album: "Seventh Son Of A Seventh Son",
    id: 10003
  },
  {
    name: "Fiction",
    artist: "Avenged Sevenfold",
    album: "Nightmare",
    id: 10004
  },
  {
    name: "Master Of Puppets",
    artist: "Metallica",
    album: "Master Of Puppets",
    id: 10005
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <main>
        <SearchResults tracks={tracks} />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
