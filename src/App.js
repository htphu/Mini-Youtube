import './App.css';
import Nav from './components/Nav';
import WatchVideos from './components/WatchVideos';
import { Routes, Route } from "react-router-dom";
import HomeVideos from './components/HomeVideos';
import SearchVideos from './components/SearchVideos'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/Mini-Youtube" exact element={<HomeVideos/>}/>
        <Route path="/Mini-Youtube/watch/:id/:categoryId" element={<WatchVideos/>}/>
        <Route path="/Mini-Youtube/Search/:q" element={<SearchVideos/>} />
      </Routes>
      
    </div>
  );
}

export default App;
