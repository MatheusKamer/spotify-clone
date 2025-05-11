import { useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';
import Player from '../components/Player';

import { artistArray } from '../assets/database/artists';

const Song = () => {
  const { id } = useParams<{ id: string }>();
  const song = songsArray.find((s) => s.id === Number(id));

  const artist = artistArray.find((a) => a.name === song?.artist);

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={song?.image} alt={`Imagem da música ${song?.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artist?.image}
            alt={`Imagem do artista ${artist?.name}`}
          />
        </div>

        <Player />

        <div>
          <p className="song__name">{song?.name}</p>
          <p>{song?.artist}</p>
        </div>
      </div>
    </div>
  );
};
export default Song;
