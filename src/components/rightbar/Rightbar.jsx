import classes from './rightbar.module.scss';
import gift from '../../assets/gift.png';
import ad from '../../assets/ad.png';
import person3 from '../../assets/person/3.jpeg';

export default function Rightbar() {
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src={gift} alt="" />
          <span className={classes.birthdayText}>
            <b>Ben Jackson</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className={classes.rightbarAd} src={ad} alt="" />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.friendList}>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src={person3} alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src={person3} alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src={person3} alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarImgContainer}>
              <img src={person3} alt="" />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span>John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
