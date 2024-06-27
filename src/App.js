import './App.css';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

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
