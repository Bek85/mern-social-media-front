import classes from './profile.module.scss';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className={classes.profileContainer}>
        <Sidebar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className={classes.profilePhoto}
                src="/assets/person/3.jpeg"
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
              <h4>Alex Smith</h4>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus, enim.
              </span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
