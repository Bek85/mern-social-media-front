import Post from '../post/Post';
import Share from '../share/Share';
import classes from './feed.module.scss';
import { Posts } from '../../staticData';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get(`/api/posts/timeline/${user._id}`);
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
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
