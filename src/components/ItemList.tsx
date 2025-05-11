import SingleItem from './SingleItem';
import type { ArtistArrayType } from '../@types/Artist';
import type { SongArrayType } from '../@types/Song';
import { Link } from 'react-router-dom';

interface ItemListProps {
  title: string;
  type: 'Artista' | 'Música';
  path: string;
  idPath: string;
  items: ArtistArrayType | SongArrayType;
}

const ItemList = ({ title, type, path, idPath, items }: ItemListProps) => {
  const data =
    type === 'Artista' ? (items as ArtistArrayType) : (items as SongArrayType);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link to={path}>Mostrar tudo</Link>
      </div>

      <div className="item-list__container">
        {data.map((item, index) =>
          type === 'Artista'
            ? index < 10 && (
                <SingleItem
                  key={item.id}
                  item={item}
                  type={type}
                  idPath={idPath}
                />
              )
            : index < 20 && (
                <SingleItem
                  key={item.id}
                  item={item}
                  type={type}
                  idPath={idPath}
                />
              )
        )}
      </div>
    </div>
  );
};

export default ItemList;
