import { Link } from 'react-router-dom';
import type { Song } from '../@types/Song';

interface SongItemProps {
  song: Song;
  index: number;
  onClick: () => void;
}

const SongItem = ({ song, index, onClick }: SongItemProps) => {
  return (
    <Link to={`/song/${song.id}`} className="song-item" onClick={onClick}>
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            className="song-item__image"
            src={song.image}
            alt={`Imagem da música ${song.name}`}
          />

          <p className="song-item__name">{song.name}</p>
        </div>
      </div>

      <p>{song.duration}</p>
    </Link>
  );
};
export default SongItem;
