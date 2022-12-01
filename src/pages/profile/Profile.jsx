import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import classes from './profile.module.scss';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${backendUrl}/api/users?username=${params.username}`
      );
      setUser(response.data);
    };

    getUser();
  }, [params.username]);

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
            <Feed username={user.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
