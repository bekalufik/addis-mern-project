import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AddSong from "./components/AddSong";
import Navbar from "./components/Navbar";
import SongDetails from "./components/SongDetails";
import SongEdit  from "./components/SongEdit";
import SongList from './components/SongList';
import Statistics from "./components/Statistics";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route  path="/" element={<SongList />} />
              <Route  path="/songs/add" element={<AddSong />} />
              <Route  path="/songs/:id" element={<SongDetails />} />
              <Route  path="/songs/edit/:id" element={<SongEdit />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
