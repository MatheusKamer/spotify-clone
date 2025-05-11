import { useState } from 'react';

import SongItem from './SongItem';

import type { Artist } from '../@types/Artist';
import type { SongArrayType } from '../@types/Song';

interface SongListProps {
  artist: Artist | undefined;
  songs: SongArrayType | undefined;
}

const SongList = ({ songs }: SongListProps) => {
  const [exibitionCount, setExibitionCount] = useState(1);

  const visibleSongs = songs?.slice(0, exibitionCount * 5);

  return (
    <div className="song-list">
      {visibleSongs?.map((song, index) => (
        <SongItem key={song?.id} index={index} song={song} />
      ))}

      {visibleSongs && visibleSongs?.length < (songs?.length ?? 0) && (
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
