import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import type { Song } from '../@types/Song';

interface PlayerProps {
  song: Song | undefined;
}

const Player = ({ song }: PlayerProps) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${song!.id - 1}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play "
          icon={faCirclePlay}
        />

        <Link to={`/song/${song!.id + 1}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{song?.duration}</p>
      </div>
    </div>
  );
};
export default Player;
