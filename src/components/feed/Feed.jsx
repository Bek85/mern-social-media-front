import Post from '../post/Post';
import Share from '../share/Share';
import classes from './feed.module.scss';
import { Posts } from '../../staticData';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        '/api/posts/timeline/6315c306760e0e44a597035d'
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

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
