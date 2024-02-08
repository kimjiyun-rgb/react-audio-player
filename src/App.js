import React from 'react';
import MusicPlayer from './MusicPlayer';
import TrackList from './components/TrackList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <MusicPlayer />
            <TrackList />
          </div>
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
