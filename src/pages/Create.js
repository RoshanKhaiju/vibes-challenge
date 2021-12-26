import { Link } from "react-router-dom";

import Comments from "../components/Comments";
import Data from "../data/data.json";

function Create() {
  const a = Data.articles;

  return (
    <div>
      <div className="container-fluid bg-dark pt-5 pb-5 ">
        <div class="container text-light">
          <h1>{a[0].title}</h1>
          <div class="d-flex align-items-center mt-4">
            <figure>
              <img
                src={a[0].author.image}
                class="border rounded-circle"
                alt="user"
                style={{ height: "3rem" }}
              />
            </figure>
            <div>
              <ul class="list-unstyled mx-3">
                <li class="text-light">{a[0].author.username}</li>
                <li class="fw-lighter">Wed Nov 24 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-4">
        <div class="border-bottom pb-5 mb-5">
          <p class="fw-bold">{a[0].body}</p>
          {a[0].tagList.map((t) => {
            return (
              <li class="badge text-dark fw-lighter border border-secondary rounded-pill mt-3 me-2">
                {t}
              </li>
            );
          })}
        </div>
        <div class="comments row">
          <div class="col-2"></div>
          <div class="col-8">
            <p>
              <Link to="/signIn" class="text-decoration-none text-success">
                Sign In
              </Link>{" "}
              or{" "}
              <Link to="/signUp" class="text-decoration-none text-success">
                Sign Up
              </Link>{" "}
              to add comments on this article.
            </p>
            <Comments comment={a[0].comments}/>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Create;
