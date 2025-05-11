import { useLocation } from 'react-router-dom';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
import ItemList from './ItemList';

interface MainProps {
  type?: string;
}

const Main = ({ type }: MainProps) => {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <div className="main">
      {(type === 'artist' || !type) && (
        <ItemList
          title="Artistas populares"
          type={type}
          path="/artists"
          idPath="/artist"
          showItems={isHome ? 10 : null}
          items={artistArray}
        />
      )}
      {(type === 'song' || !type) && (
        <ItemList
          title="Músicas populares"
          type={type}
          path="/songs"
          idPath="/song"
          showItems={isHome ? 20 : null}
          items={songsArray}
        />
      )}
    </div>
  );
};
export default Main;
