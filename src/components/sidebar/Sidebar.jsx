import classes from './sidebar.module.scss';
import {
  MdBookmark,
  MdChat,
  MdEvent,
  MdGroup,
  MdHelpOutline,
  MdPlayCircleOutline,
  MdRssFeed,
  MdSchool,
  MdWorkOutline,
} from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>
            <MdRssFeed />
            <span className={classes.sidebarListItemText}>Feed</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdChat />
            <span className={classes.sidebarListItemText}>Chats</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdPlayCircleOutline />
            <span className={classes.sidebarListItemText}>Videos</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdGroup />
            <span className={classes.sidebarListItemText}>Groups</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdBookmark />
            <span className={classes.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdHelpOutline />
            <span className={classes.sidebarListItemText}>Questions</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdWorkOutline />
            <span className={classes.sidebarListItemText}>Jobs</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdEvent />
            <span className={classes.sidebarListItemText}>Events</span>
          </li>
          <li className={classes.sidebarListItem}>
            <MdSchool />
            <span className={classes.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={classes.sidebarButton}>Show More</button>
        <hr className={classes.sidebarHr} />
        <ul className={classes.sidebarFriendList}>
          <li className={classes.sidebarFriend}>
            <img
              className={classes.sidebarFriendImg}
              src="./person/2.jpeg"
              alt=""
            />
            <span className={classes.friendName}>Jane Doe</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img
              className={classes.sidebarFriendImg}
              src="./person/2.jpeg"
              alt=""
            />
            <span className={classes.friendName}>Jane Doe</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img
              className={classes.sidebarFriendImg}
              src="./person/2.jpeg"
              alt=""
            />
            <span className={classes.friendName}>Jane Doe</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img
              className={classes.sidebarFriendImg}
              src="./person/2.jpeg"
              alt=""
            />
            <span className={classes.friendName}>Jane Doe</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img
              className={classes.sidebarFriendImg}
              src="./person/2.jpeg"
              alt=""
            />
            <span className={classes.friendName}>Jane Doe</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img
              className={classes.sidebarFriendImg}
              src="./person/2.jpeg"
              alt=""
            />
            <span className={classes.friendName}>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
