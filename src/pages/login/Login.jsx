import { useContext, useRef } from 'react';
import { loginCall } from '../../api/apiCalls';
import classes from './login.module.scss';
import { AuthContext } from '../../context/AuthContext';
import BeatLoader from 'react-spinners/BeatLoader';
import { Link } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>Social App</h3>
          <span>
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className={classes.loginRight} onSubmit={handleSubmit}>
          <form className={classes.loginBox}>
            <input
              type="email"
              placeholder="Email"
              ref={email}
              required
              autoComplete="true"
            />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              required
              autoComplete="true"
            />
            <button
              type="submit"
              className={classes.loginBtn}
              disabled={isFetching}
            >
              {isFetching ? (
                <BeatLoader loading={isFetching} size={10} color="#fff" />
              ) : (
                'Log In'
              )}
            </button>

            <span>Forgot Password?</span>
            <Link
              to="/register"
              className={classes.registerBtn}
              disabled={isFetching}
            >
              {isFetching ? (
                <BeatLoader loading={isFetching} size={10} color="#fff" />
              ) : (
                'Create a New Account'
              )}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
