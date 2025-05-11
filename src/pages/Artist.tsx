import { Link, useParams } from 'react-router-dom';

import SongList from '../components/SongList';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Artist = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artistArray.find((s) => s.id === Number(id));

  const songs = songsArray.filter((song) => song.artist === artist?.name);

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artist?.banner})`,
        }}
      >
        <h2 className="artist__title">{artist?.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList artist={artist ? artist : undefined} songs={songs} />
      </div>

      <Link to={`/song/${songs[0]?.id}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};
export default Artist;
