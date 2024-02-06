import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './MusicPlayer.css'; // 스타일 파일 추가

const MusicPlayer = () =>
{
    const initialPlaylist = [
        { name: 'song1', src: '/music/song1.mp3' },
        { name: 'song2', src: '/music/song2.mp3' },
        { name: 'song3', src: '/music/song3.mp3' },
        { name: 'song4', src: '/music/song4.mp3' },
        { name: 'song5', src: '/music/song5.mp3' },
        { name: 'song6', src: '/music/song6.mp3' },
        { name: 'song7', src: '/music/song7.mp3' },
        { name: 'song8', src: '/music/song8.mp3' },
        { name: 'song9', src: '/music/song9.mp3' },
        { name: 'song10', src: '/music/song10.mp3' },
        // Add more songs as needed
    ];

    const [playlist, setPlaylist] = useState(initialPlaylist);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);


    useEffect(() =>
    {
        // 현재 트랙이 변경될 때마다 재생 상태를 업데이트합니다.
        setIsPlaying(true);
    }, [currentTrackIndex, isRepeat]);

    useEffect(() =>
    {
        // 자동으로 트랙 재생을 처리하는 로직
        if (isPlaying)
        {
            const playNextTrack = () =>
            {
                // 반복 재생이 켜져 있고 마지막 트랙이면 첫 번째 트랙으로 이동
                if (isRepeat && currentTrackIndex === playlist.length - 1)
                {
                    setCurrentTrackIndex(0);
                } else if (currentTrackIndex < playlist.length - 1)
                {
                    // 다음 트랙으로 이동
                    setCurrentTrackIndex(currentTrackIndex + 1);
                } else
                {
                    // 마지막 트랙이면 재생을 멈춥니다.
                    setIsPlaying(false);
                    alert('플레이리스트의 마지막 음악이 종료되었습니다.');
                }
            };

            // 현재 트랙 재생이 끝났을 때 다음 트랙으로 이동하는 함수를 등록
            const onEndedHandler = () =>
            {
                playNextTrack();
            };

            // 다음 트랙으로 이동할 타이머 설정 (현재 음악의 길이에 맞게 설정)
            const currentTrackDuration = 10000; // 테스트용으로 10초로 설정 (실제로는 음악의 길이를 가져와야 함)
            const timerId = setTimeout(() =>
            {
                playNextTrack();
            }, currentTrackDuration);

            return () =>
            {
                // 컴포넌트가 언마운트되거나 재생이 중지될 때 타이머 해제
                clearTimeout(timerId);
            };
        }
    }, [isPlaying, currentTrackIndex, playlist, isRepeat]);

    const handlePlayPause = () =>
    {
        setIsPlaying(!isPlaying);
    };

    const handleStop = () =>
    {
        setIsPlaying(false);
    };

    const handleDelete = () =>
    {
        // 실제로는 선택된 음악 파일을 삭제하거나 서버에서 삭제하는 로직을 추가해야 합니다.
        alert('현재 음악 파일이 삭제되었습니다.');
    };

    const handleChangeTrack = (direction) =>
    {
        // direction이 'next'이면 다음 트랙, 'prev'이면 이전 트랙으로 이동
        if (direction === 'next' && currentTrackIndex < playlist.length - 1)
        {
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else if (direction === 'prev' && currentTrackIndex > 0)
        {
            setCurrentTrackIndex(currentTrackIndex - 1);
        }
    };

    return (
        <div className="music-player-container">
            <h2 className="app-title">Music Player App</h2>
            <AudioPlayer
                autoPlay
                controls
                src={playlist[0].src}
                onEnded={(e) =>
                {
                    console.log("노래 끝");
                    console.log(e);
                }}
                playlist={playlist}
                playing={isPlaying}
                currentTrackIndex={currentTrackIndex}
            />
            <div className="control-buttons">
                <button onClick={handlePlayPause} className="play-pause-btn">
                    {isPlaying ? '일시정지' : '재생'}
                </button>
                <button onClick={handleStop} className="stop-btn">정지</button>
                <button onClick={() => handleChangeTrack('prev')} className="prev-track-btn">이전 트랙</button>
                <button onClick={() => handleChangeTrack('next')} className="next-track-btn">다음 트랙</button>
                <button onClick={handleDelete} className="delete-btn">삭제</button>
            </div>
        </div>
    );
};

export default MusicPlayer;