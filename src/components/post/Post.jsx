import classes from './post.module.scss';
import { MdMoreVert } from 'react-icons/md';
import { Users } from '../../staticData';
import { useState } from 'react';

export default function Post({ post }) {
  const user = Users.filter((user) => user.id === post.userId);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

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
            <img
              onClick={likeHandler}
              className={classes.postIcon}
              src="/assets/like.png"
              alt=""
            />
            <img
              onClick={likeHandler}
              className={classes.postIcon}
              src="/assets/heart.png"
              alt=""
            />
            <span className={classes.postLikeCounter}>
              {like} people like it
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
