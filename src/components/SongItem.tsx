import { Link } from 'react-router-dom';
import type { Song } from '../@types/Song';

interface SongItemProps {
  song: Song;
  onClick: () => void;
}

const SongItem = ({ song, onClick }: SongItemProps) => {
  return (
    <Link to="song/1" className="song-item" onClick={onClick}>
      <div className="song-item__number-album">
        <p>{song.id}</p>

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
