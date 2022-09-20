import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import classes from './home.module.scss';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className={classes.homeContainer}>
        <Sidebar />
        <Feed />
        {/* <Rightbar /> */}
      </div>
    </>
  );
}
