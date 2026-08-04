import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="forgot-page">

      <div className="forgot-box">

        <h1>Forgot Password</h1>

        <p>

          Enter your email to reset your password.

        </p>

        <form>

          <div>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          <button type="submit">

            Send Reset Link

          </button>

        </form>

        <p>

          <Link to="/login">

            Back to Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;