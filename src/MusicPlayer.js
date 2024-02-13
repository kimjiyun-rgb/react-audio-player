import React, { useRef, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import './MusicPlayer.css'; // 스타일 파일 추가
import { useLocation } from 'react-router-dom';

const MusicPlayer = () =>
{
    const location = useLocation();
    const params = location.search;
    const searchParams = new URLSearchParams(params);
    const id = searchParams.get('id');
    const next = searchParams.get('next');
    const index2 = searchParams.get('index');
    console.log(id);
    console.log(next);
    console.log(index2);

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
        { name: 'song11', src: '/music/song11.mp3' },
        { name: 'song12', src: '/music/song12.mp3' },
        { name: 'song13', src: '/music/song13.mp3' },
        { name: 'song14', src: '/music/song14.mp3' },
        { name: 'song15', src: '/music/song15.mp3' },
    ];
    let index = useRef(index2); // 현재 재생중인 노래의 인덱스
    const [nowSong, setNowSong] = useState(next);
    let rap;
    return (
        <div className="music-player-container">
            <h2 className="app-title">Music Player App</h2>
            <AudioPlayer
                ref={(element) => { rap = element; }}
                autoPlay
                controls
                src={nowSong}
                onEnded={(e) =>
                {
                    const last = initialPlaylist.length - 1; // 14
                    if (last == index.current)
                    { // 마지막 노래이면
                        alert("노래없음");
                        setNowSong("");
                    } else
                    {
                        index.current++; // 다음 노래 인덱스
                        setNowSong(initialPlaylist[index.current].src);
                    }
                }}
            />
            <div className="control-buttons">
                <button onClick={() =>
                {
                    setNowSong("");
                }} className="stop-btn">정지</button>
                <button onClick={() =>
                {
                    index.current = 0
                    setNowSong(initialPlaylist[0].src);
                }} className="start-btn">재생</button>
                <button onClick={() =>
                {
                    if (index.current == 0)
                    {
                        const last = initialPlaylist.length - 1; // 14                 
                        setNowSong(initialPlaylist[last].src);
                    } else
                    {
                        index.current--; // 이전 노래 인덱스
                        setNowSong(initialPlaylist[index.current].src);
                    }
                }
                } className="prev-track-btn">이전 트랙</button>
                <button onClick={() =>
                {
                    const last = initialPlaylist.length - 1; // 14
                    if (last == index.current)
                    { // 마지막 노래이면
                        alert("노래없음");
                        setNowSong("");
                    } else
                    {
                        index.current++; // 다음 노래 인덱스
                        setNowSong(initialPlaylist[index.current].src);
                    }
                }} className="next-track-btn">다음 트랙</button>
                <button onClick={() =>
                {

                }} className="item-btn">{ }</button>
            </div>
        </div>
    );
};

export default MusicPlayer;