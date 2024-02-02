import React from 'react';
import AudioPlayer from 'react-audio-player';
import './AudioPlayer.css'; // AudioPlayer의 스타일 파일 추가

const CustomAudioPlayer = ({ playlist, isPlaying, onEnded }) =>
{
    return (
        <AudioPlayer
            autoPlay
            controls
            playlist={playlist}
            playing={isPlaying}
            onEnded={onEnded}
        />
    );
};

export default CustomAudioPlayer;