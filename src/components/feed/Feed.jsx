import Post from '../post/Post';
import Share from '../share/Share';
import classes from './feed.module.scss';
import { Posts } from '../../staticData';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get(`/api/posts/timeline/6315d3ed42ec27832619dcbb`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

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
