import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div class="container col-xl-5 col-lg-6 col-md-8 pt-5">
      <div class="text-center">
        <h1>Sign In</h1>
        <p>
          <Link to="/signUp" class="link-success text-decoration-none">New to Vibes?</Link>
        </p>
      </div>
      <form class="">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="InputUsername"
            placeholder="Username"
          />
        </div>

        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="InputPassword"
            placeholder="Password"
          />
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-success">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
