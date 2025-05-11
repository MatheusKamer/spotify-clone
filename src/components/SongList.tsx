import { useState } from 'react';

import SongItem from './SongItem';

import { songsArray } from '../assets/database/songs';
import type { Artist } from '../@types/Artist';

interface SongListProps {
  artist: Artist | undefined;
}

const SongList = ({ artist }: SongListProps) => {
  const [exibitionCount, setExibitionCount] = useState(1);

  const songs = songsArray.filter((song) => song.artist === artist?.name);

  const visibleSongs = songs.slice(0, exibitionCount * 5);

  return (
    <div className="song-list">
      {visibleSongs.map((song, index) => (
        <SongItem
          key={song.id}
          index={index}
          song={song}
          onClick={() => {
            console.log('Song clicked:', index);
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
