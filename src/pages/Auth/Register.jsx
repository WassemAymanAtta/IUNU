import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">

      <div className="register-box">

        <h1>Create Account</h1>

        <p>Create your new account</p>

        <form>

          <div>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button type="submit">

            Create Account

          </button>

        </form>

        <p>

          Already have an account؟

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;