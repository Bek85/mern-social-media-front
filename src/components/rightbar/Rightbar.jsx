import classes from './rightbar.module.scss';
import { Users } from '../../staticData';
import OnlineFriends from '../onlineFriends/OnlineFriends';

export default function Rightbar() {
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
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
      </div>
    </div>
  );
}
