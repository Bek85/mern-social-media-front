import classes from './share.module.scss';
import {
  MdCancel,
  MdEmojiEmotions,
  MdLabel,
  MdPermMedia,
  MdRoom,
} from 'react-icons/md';
import { useContext, useState, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {
  const { user: currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const description = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: currentUser._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);

      newPost.img = fileName;
      try {
        await axios.post('/api/upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post('/api/posts', newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.shareContainer}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            className={classes.shareProfileImg}
            src={currentUser.profilePic || '/assets/noAvatar.png'}
            alt=""
          />
          <input
            className={classes.shareInput}
            type="text"
            placeholder={`What's in your mind ${currentUser.username}?`}
            ref={description}
          />
        </div>
        <hr className={classes.shareHr} />
        {file && (
          <div className={classes.imgPreview}>
            <img src={URL.createObjectURL(file)} alt="preview" />
            <MdCancel onClick={() => setFile(null)} />
          </div>
        )}

        <form onSubmit={handleSubmit} className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <label htmlFor="file" className={classes.shareOption}>
              <MdPermMedia className={classes.red} />
              <span className={classes.shareOptionText}>Photo or Video</span>
              <input
                type="file"
                name="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </label>
            <div className={classes.shareOption}>
              <MdLabel className={classes.blue} />
              <span className={classes.shareOptionText}>Tag</span>
            </div>
            <div className={classes.shareOption}>
              <MdRoom className={classes.green} />
              <span className={classes.shareOptionText}>Location</span>
            </div>
            <div className={classes.shareOption}>
              <MdEmojiEmotions className={classes.yellow} />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button type="submit" className={classes.shareBtn}>
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
