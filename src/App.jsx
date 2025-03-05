import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Songs from './Components/Songs';
import Sidebar from './Components/Sidebar';
import Favorities from './Components/Favorities';
import Playlist from './Components/Playlist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Sidebar />
        </div>

        <div>
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<Navigate to="/songs" />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/favorities" element={<Favorities />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
