import classes from './closeFriends.module.scss';

export default function CloseFriends({ user }) {
  return (
    <li className={classes.sidebarFriend}>
      <img
        className={classes.sidebarFriendImg}
        src={user.profilePicture}
        alt=""
      />
      <span className={classes.friendName}>{user.username}</span>
    </li>
  );
}
