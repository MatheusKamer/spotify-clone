import SingleItem from './SingleItem';
import type { ArtistArrayType } from '../@types/Artist';
import type { SongArrayType } from '../@types/Song';
import { Link } from 'react-router-dom';

interface ItemListProps {
  title: string;
  type?: string;
  path: string;
  idPath: string;
  showItems?: number | null;
  items: ArtistArrayType | SongArrayType;
}

const ItemList = ({
  title,
  type,
  path,
  idPath,
  showItems,
  items,
}: ItemListProps) => {
  const data =
    type === 'artist' ? (items as ArtistArrayType) : (items as SongArrayType);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link to={path}>{!type ? 'Mostrar tudo' : ''}</Link>
      </div>

      <div className="item-list__container">
        {data.map((item, index) => {
          const shouldRender =
            showItems === null || showItems === undefined || index < showItems;
          if (!shouldRender) return null;

          return (
            <SingleItem key={item.id} item={item} type={type} idPath={idPath} />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
