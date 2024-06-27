import './App.css';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Search from './Search/Search';
import SearchResults from './SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <main>
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
