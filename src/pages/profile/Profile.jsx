import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './profile.module.scss';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/api/users?username=Alex`);
      setUser(response.data);
    };

    getUser();
  }, []);
  return (
    <>
      <Topbar />
      <div className={classes.profileContainer}>
        <Sidebar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src={user.coverPic || '/assets/noCover.png '}
                alt=""
              />
              <img
                className={classes.profilePhoto}
                src={user.profilePic || '/assets/noAvatar.png'}
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
              <h4>{user.username}</h4>
              <span>{user.description}</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed username="Ben" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
