import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to your account</p>

        <form>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

        </p>

        <p>

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;