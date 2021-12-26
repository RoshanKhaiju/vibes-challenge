import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div class="container col-xl-5 col-lg-6 col-md-8 pt-5">
      <div class="text-center">
        <h1>Sign Up</h1>
        <p class="text-success">
          <Link to="/signIn" class="link-success text-decoration-none">
            Have an account?
          </Link>
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
            type="email"
            class="form-control"
            id="InputEmail"
            placeholder="Email"
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
