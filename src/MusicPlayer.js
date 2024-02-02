import React, { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './MusicPlayer.css'; // 스타일 파일 추가

const MusicPlayer = () =>
{
    const initialPlaylist = [
        { name: 'Song 1', src: 'path/to/song1.mp3' },
        { name: 'Song 2', src: 'path/to/song2.mp3' },
        // Add more songs as needed
    ];

    const [playlist, setPlaylist] = useState(initialPlaylist);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () =>
    {
        setIsPlaying(!isPlaying);
    };

    const handleStop = () =>
    {
        setIsPlaying(false);
    };

    const handleSave = () =>
    {
        // 실제로는 서버에 플레이리스트를 저장하거나 로컬 스토리지를 활용할 수 있습니다.
        alert('플레이리스트가 저장되었습니다.');
    };

    const handleDelete = () =>
    {
        // 실제로는 선택된 음악 파일을 삭제하거나 서버에서 삭제하는 로직을 추가해야 합니다.
        alert('현재 음악 파일이 삭제되었습니다.');
    };

    const handleAddSong = () =>
    {
        const newSong = { name: 'New Song', src: 'path/to/new-song.mp3' };
        setPlaylist([...playlist, newSong]);
        alert('새로운 음악 파일이 추가되었습니다.');
    };

    const handleEnd = () =>
    {
        // 음악이 종료될 때 호출되는 함수
        alert('음악이 종료되었습니다.');
    };

    return (
        <div className="music-player-container">
            <h2 className="app-title">Music Player App</h2>
            <AudioPlayer
                autoPlay
                controls
                playlist={playlist}
                playing={isPlaying}
                onEnded={handleEnd}
            />
            <div className="control-buttons">
                <button onClick={handlePlayPause} className="play-pause-btn">
                    {isPlaying ? '일시정지' : '재생'}
                </button>
                <button onClick={handleStop} className="stop-btn">정지</button>
                <button onClick={handleSave} className="save-btn">저장</button>
                <button onClick={handleDelete} className="delete-btn">삭제</button>
                <button onClick={handleAddSong} className="add-song-btn">음악 추가</button>
            </div>
        </div>
    );
};

export default MusicPlayer;