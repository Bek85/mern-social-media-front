import classes from './post.module.scss';
import person from '../../assets/person/1.jpeg';
import post from '../../assets/post/1.jpeg';
import heart from '../../assets/heart.png';
import like from '../../assets/like.png';
import { MdMoreVert } from 'react-icons/md';

export default function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img src={person} alt="" />
            <span className={classes.postUsername}>Alex Smith</span>
            <span className={classes.postDate}>5 mins ago</span>
          </div>
          <div className={classes.postTopRight}>
            <MdMoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            nihil.
          </span>
          <img src={post} alt="" />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img className={classes.postIcon} src={like} alt="" />
            <img className={classes.postIcon} src={heart} alt="" />
            <span className={classes.postLikeCounter}>35 people like it</span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
