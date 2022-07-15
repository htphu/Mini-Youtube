import './App.css';
import Nav from './components/Nav';
import WatchVideos from './components/WatchVideos';
import { Routes, Route } from "react-router-dom";
import HomeVideos from './components/HomeVideos';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/Mini-Youtube" exact element={<HomeVideos/>}/>
        <Route path="/Mini-Youtube/watch/:id/:categoryId" element={<WatchVideos/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
