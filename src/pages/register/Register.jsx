import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './register.module.scss';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordRepeat = useRef();
  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRepeat.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post('/api/auth/register', user);
        redirect('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <form onSubmit={handleSubmit} className={classes.registerBox}>
            <input type="text" placeholder="Username" ref={username} required />
            <input type="email" placeholder="Email" ref={email} required />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              required
            />
            <input
              type="password"
              placeholder="Repeat your password"
              ref={passwordRepeat}
              required
            />
            <button type="submit" className={classes.registerBtn}>
              Sign Up
            </button>
            <Link to="/login" className={classes.loginBtn}>
              Login into Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
