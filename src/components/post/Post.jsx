import classes from './post.module.scss';
import { MdMoreVert } from 'react-icons/md';
import { Users } from '../../staticData';

export default function Post({ post }) {
  const user = Users.filter((user) => user.id === post.userId);

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img src={user[0].profilePicture} alt="" />
            <span className={classes.postUsername}>{user[0].username}</span>
            <span className={classes.postDate}>{post.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MdMoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{post?.desc}</span>
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
              {post.comment} {post.comment > 1 ? 'comments' : 'comment'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
