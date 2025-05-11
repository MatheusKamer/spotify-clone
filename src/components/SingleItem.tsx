import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Artist } from '../@types/Artist';
import type { Song } from '../@types/Song';
import { Link } from 'react-router-dom';

interface SingleItemProps {
  item: Artist | Song;
  type?: string;
  idPath: string;
}

const SingleItem = ({ item, type, idPath }: SingleItemProps) => {
  const isSong = type === 'song';

  return (
    <Link className="single-item" to={`${idPath}/${item.id}`}>
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img src={item.image} alt={`Imagem do ${item.name}`} />
          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{item.name}</p>
        </div>
        {isSong && 'artist' in item ? (
          <p className="single-item__type">{item.artist}</p>
        ) : (
          <p className="single-item__type">Artista</p>
        )}
      </div>
    </Link>
  );
};

export default SingleItem;
