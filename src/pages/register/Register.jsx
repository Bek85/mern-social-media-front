import classes from './register.module.scss';

export default function Register() {
  return (
    <div className={classes.registerContainer}>
      <div className={classes.registerWrapper}>
        <div className={classes.registerLeft}>
          <h3 className={classes.registerLogo}>Social App</h3>
          <span>
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className={classes.registerRight}>
          <div className={classes.registerBox}>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat your password" />
            <button className={classes.registerBtn}>Sign Up</button>

            <button className={classes.registerRegisterBtn}>
              Login into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
