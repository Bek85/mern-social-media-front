import Post from '../post/Post';
import Share from '../share/Share';
import classes from './feed.module.scss';
import { Posts } from '../../staticData';

export default function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
