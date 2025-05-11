import { useState } from 'react';

import SongItem from './SongItem';

import { songsArray } from '../assets/database/songs';

const SongList = () => {
  const [exibitionCount, setExibitionCount] = useState(1);

  const songs = songsArray.filter(
    (song) => song.artist === 'Henrique & Juliano'
  );

  const visibleSongs = songs.slice(0, exibitionCount * 5);

  return (
    <div className="song-list">
      {visibleSongs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClick={() => {
            console.log('Song clicked:', song.artist);
          }}
        />
      ))}

      {visibleSongs.length < songs.length && (
        <p
          className="song-list__see-more"
          onClick={() => setExibitionCount(exibitionCount + 1)}
        >
          Ver mais
        </p>
      )}
    </div>
  );
};
export default SongList;
