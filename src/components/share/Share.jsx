import classes from './share.module.scss';
import { MdEmojiEmotions, MdLabel, MdPermMedia, MdRoom } from 'react-icons/md';

export default function Share() {
  return (
    <div className={classes.shareContainer}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            className={classes.shareProfileImg}
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            className={classes.shareInput}
            type="text"
            placeholder="What's in your mind"
          />
        </div>
        <hr className={classes.shareHr} />

        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <MdPermMedia className={classes.red} />
              <span className={classes.shareOptionText}>Photo or Video</span>
            </div>
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
          <button className={classes.shareBtn}>Share</button>
        </div>
      </div>
    </div>
  );
}
