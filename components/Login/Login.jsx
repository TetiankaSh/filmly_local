import './Login.scss';

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <header className="login-card__header">
          <h1>Log In</h1>
          <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
        </header>

        <div className="login-card__content">
          {/* Left Side: Email/Pass */}
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="xxxxxx@gmail.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="XXXXXXXXXX" />
            </div>
            <button type="submit" className="login-btn">Log in</button>
          </form>

          {/* Center Divider */}
          <div className="divider">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>

          {/* Right Side: Social Logins */}
          <div className="social-logins">
            <button className="social-btn google">Continue with Google</button>
            <button className="social-btn facebook">Continue with Facebook</button>
            <button className="social-btn apple">Continue with Apple</button>
          </div>
        </div>
      </div>
    </div>
  )
}