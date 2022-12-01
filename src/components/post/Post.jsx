import classes from './post.module.scss';
import { MdMoreVert } from 'react-icons/md';
// import { Users } from '../../staticData';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { AuthContext } from '../../context/AuthContext';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Post({ post }) {
  const [user, setUser] = useState({});
  // const user = Users.filter((user) => user.id === post.userId);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${backendUrl}/api/users?userId=${post.userId}`);
      setUser(response.data);
    };

    getUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put(`${backendUrl}/api/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {
      console.log(error);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <Link to={`profile/${user.username}`}>
              <img src={user.profilePic || '/assets/noAvatar.png'} alt="" />
            </Link>

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
              {like >= 1 && like}{' '}
              {like >= 2 ? 'people like it' : 'person likes it'}{' '}
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
