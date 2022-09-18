import classes from './rightbar.module.scss';
import { Users } from '../../staticData';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const friendsList = await axios.get(`/api/users/friends/${user._id}`);
        setFriends(friendsList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFollowers();
  }, [user]);

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
            <span className={classes.rightbarInfoValue}>{user.city}</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>{user.from}</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : ''}
            </span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User friends</h4>
        <div className={classes.rightbarFollowings}>
          {friends.map((friend) => {
            return (
              <Link
                to={`/profile/${friend.username}`}
                key={friend._id}
                className={classes.rightbarFollowing}
              >
                <img
                  src={friend.profilePic || '/assets/noAvatar.png'}
                  alt=""
                  className={classes.rightbarFollowingImg}
                />
                <span className={classes.rightbarFollowingName}>
                  {friend.username}
                </span>
              </Link>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
