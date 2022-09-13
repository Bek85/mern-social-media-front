import classes from './topbar.module.scss';
import { MdChat, MdNotifications, MdPerson, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <Link to="/">
          <span className={classes.logo}>Social App</span>
        </Link>
      </div>
      <div className={classes.topbarCenter}>
        <div className={classes.searchbox}>
          <MdSearch />
          <input
            type="text"
            className={classes.searchInput}
            placeholder="Search for friends, posts or videos"
          />
        </div>
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.topbarLinks}>
          <span className={classes.topbarLink}>Homepage</span>
          <span className={classes.topbarLink}>Timeline</span>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <MdPerson />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <MdChat />
            <span className={classes.topbarIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconItem}>
            <MdNotifications />
            <span className={classes.topbarIconBadge}>5</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className={classes.topbarImg} />
      </div>
    </div>
  );
}
