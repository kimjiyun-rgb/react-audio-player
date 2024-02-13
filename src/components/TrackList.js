import styles from './TrackList.module.css';

const list = [
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
]

const TrackList = () =>
{
    return (
        <div>
            <ul className={styles.list}>
                {
                    list.map((item, idx) =>
                    {
                        return <li key={idx}><a href={`/?id=${item.name}&next=${item.src}&index=${idx}`}>{item.src}</a></li>
                    })
                }
            </ul>
        </div>
    );
}



export default TrackList;