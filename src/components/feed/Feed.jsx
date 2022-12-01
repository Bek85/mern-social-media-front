import Post from '../post/Post';
import Share from '../share/Share';
import classes from './feed.module.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`${backendUrl}/api/posts/profile/${username}`)
        : await axios.get(`${backendUrl}/api/posts/timeline/${user._id}`);
      setPosts(
        response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        {(!username || username === user.username) && <Share />}
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
