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
        <div className="profileRight">
          <div className="profileRightTop">ProfileRightTop</div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
