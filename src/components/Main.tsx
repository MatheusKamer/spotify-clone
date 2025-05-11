import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
import ItemList from './ItemList';

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas populares"
        type="Artista"
        path="/artists"
        idPath="/artist"
        items={artistArray}
      />

      <ItemList
        title="Músicas populares"
        type="Música"
        path="/songs"
        idPath="/song"
        items={songsArray}
      />
    </div>
  );
};
export default Main;
