import Share from '../share/Share';
import classes from './feed.module.scss';

export default function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
      </div>
    </div>
  );
}
