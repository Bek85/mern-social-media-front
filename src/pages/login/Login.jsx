import React from 'react';
import classes from './login.module.scss';

export default function Login() {
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>Social App</h3>
          <span>
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className={classes.loginRight}>
          <div className={classes.loginBox}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className={classes.loginBtn}>Log In</button>
            <span>Forgot Password?</span>
            <button className={classes.loginRegisterBtn}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
