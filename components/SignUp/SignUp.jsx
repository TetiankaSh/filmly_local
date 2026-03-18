import './SignUp.scss';

export const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <header className="signup-card__header">
          <h1>Sign Up</h1>
          <p>Already have an account? <a href="/login">Log In</a></p>
        </header>

        <div className="signup-card__content">
          {/* Left Side: Email/Pass */}
          <form className="signup-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="xxxxxx@gmail.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="XXXXXXXXXX" />
            </div>
            <button type="submit" className="signup-btn">Sign up</button>
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