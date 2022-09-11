import classes from './onlineFriends.module.scss';

export default function OnlineFriends({ user }) {
  return (
    <li className={classes.rightbarFriend}>
      <div className={classes.rightbarImgContainer}>
        <img src={user.profilePicture} alt="" />
        <span className={classes.rightbarOnline}></span>
      </div>
      <span>{user.username}</span>
    </li>
  );
}
