import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './MusicPlayer.css'; // 스타일 파일 추가

const MusicPlayer = () =>
{
    const playlist = [
        { name: 'Song 1', src: 'path/to/song1.mp3' },
        { name: 'Song 2', src: 'path/to/song2.mp3' },
        // Add more songs as needed
    ];

    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () =>
    {
        setIsPlaying(!isPlaying);
    };

    const handleStop = () =>
    {
        setIsPlaying(false);
    };

    return (
        <div className="music-player-container">
            <h2 className="app-title">Music Player App</h2>
            <AudioPlayer
                autoPlay
                controls
                playlist={playlist}
                playing={isPlaying}
            />
            <div className="control-buttons">
                <button onClick={handlePlayPause} className="play-pause-btn">
                    {isPlaying ? '일시정지' : '재생'}
                </button>
                <button onClick={handleStop} className="stop-btn">정지</button>
            </div>
        </div>
    );
};

export default MusicPlayer;