import classes from './rightbar.module.scss';

export default function Rightbar() {
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src="./gift.png" alt="" />
          <span className={classes.birthdayText}>
            <b>Ben Jackson</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className={classes.rightbarAd} src="./ad.png" alt="" />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.friendList}>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src="./person/3.jpeg" alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src="./person/3.jpeg" alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src="./person/3.jpeg" alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src="./person/3.jpeg" alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
