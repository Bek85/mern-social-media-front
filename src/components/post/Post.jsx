import classes from './post.module.scss';
import { MdMoreVert } from 'react-icons/md';
// import { Users } from '../../staticData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TimeAgo from 'timeago-react';

export default function Post({ post }) {
  const [user, setUser] = useState({});
  // const user = Users.filter((user) => user.id === post.userId);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`api/users/${post.userId}`);
      setUser(response.data);
    };

    getUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img src={user.profilePic || '/assets/noAvatar.png'} alt="" />
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>
              <TimeAgo datetime={post.createdAt} />
            </span>
          </div>
          <div className={classes.postTopRight}>
            <MdMoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{post?.description}</span>
          <img src={post.img || '/assets/noCover.png'} alt="" />
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
              {like >= 1 && like} {like >= 2 ? 'people like it' : ''}{' '}
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
