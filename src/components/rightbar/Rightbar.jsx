import classes from './rightbar.module.scss';
import { Users } from '../../staticData';
import OnlineFriends from '../onlineFriends/OnlineFriends';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src="./assets/gift.png" alt="" />
          <span className={classes.birthdayText}>
            <b>Ben Jackson</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className={classes.rightbarAd} src="./assets/ad.png" alt="" />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.friendList}>
          {Users.map((user) => {
            return <OnlineFriends key={user.id} user={user} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={classes.rightbarTitle}>User information</h4>
        <div className={classes.rightbarInfo}>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>New York</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Madrid</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User friends</h4>
        <div className={classes.rightbarFollowings}>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/2.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
