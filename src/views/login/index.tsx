import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const App: React.FC = () => {
  return (
    <div className="app-login">
      <div className="left-img">
        <div className="glass">
          <div className="tips">
            <div className="title">THE SPACE NETWORK</div>
            <h1>Explore The Universe</h1>
            <span>5 Million+ people have joined our network.</span>
            <span>we invite you to join the tribe</span>
          </div>
        </div>
      </div>
      <div className="right-login-form">
        <div className="app-login-tip">
          <Link className="app-login-tip__link" to={'/home'}>
            HOME
          </Link>
        </div>
        <div className="form-wrapper">
          <h1>Log in</h1>
          <div className="input-items">
            <span className="input-tips">Email Address</span>
            <input
              type="text"
              className="inputs"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-items">
            <span className="input-tips">Password</span>
            <input
              type="password"
              className="inputs"
              placeholder="Enter password"
            />
            <span className="forgot">Forgot Password</span>
          </div>
          <button className="btn">Login</button>
          <div className="siginup-tips">
            <span>Don't Have An Account?</span>
            <span>Signup</span>
          </div>
          <div className="other-login">
            <div className="divider">
              <span className="line"></span>
              <span className="divider-text">or</span>
              <span className="line"></span>
            </div>
            <div className="other-login-wrapper">
              <div className="other-login-item">
                <img src="src/assets/images/QQ.png" alt="QQ" />
              </div>
              <div className="other-login-item">
                <img src="src/assets/images/WeChat.png" alt="WeChat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
