import classes from './post.module.scss';
import { MdMoreVert } from 'react-icons/md';

export default function Post({ post }) {
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img src="./person/2.jpeg" alt="" />
            <span className={classes.postUsername}>Alex Smith</span>
            <span className={classes.postDate}>{post.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MdMoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{post.desc}</span>
          <img src={post.photo} alt="" />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img className={classes.postIcon} src="./like.png" alt="" />
            <img className={classes.postIcon} src="./heart.png" alt="" />
            <span className={classes.postLikeCounter}>
              {post.like} people like it
            </span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
