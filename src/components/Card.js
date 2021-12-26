import { Link } from "react-router-dom";

import Data from "../data/data.json";

function Card() {
  const dataList = Data.articles;

  return (
    <div>
      {dataList.map((a) => {
        return (
          <div class="border-bottom mb-4">
            <div class="pt-3">
              <div class="top d-flex justify-content-between">
                <div class="top-left d-flex align-items-center">
                  <figure>
                    <img
                      src={a.author.image}
                      class="border rounded-circle"
                      alt="user"
                      style={{ height: "3rem" }}
                    />
                  </figure>
                  <div>
                    <ul class="list-unstyled mx-3">
                      <li class="fs-5 fw-bold text-success">
                        {a.author.username}
                      </li>
                      <li class=" fw-lighter">Wed Nov 24 2021</li>
                    </ul>
                  </div>
                </div>
                <div class="top-right">
                  <span class="badge text-success border border-success p-2">
                    <i class="fas fa-heart"></i> {a.favoritesCount}
                  </span>
                </div>
              </div>
              <div class="mid pt-2 pb-2">
                <h4>{a.title}</h4>
                <p class="fw-lighter">{a.description}</p>
              </div>
              <div class="bottom ">
                <ul class="list-unstyled d-flex justify-content-between align-items-center">
                  <li class="fw-lighter ">
                    <Link
                      to={a.slug}
                      class="link-secondary text-decoration-none"
                    >
                      Read More ...
                    </Link>
                  </li>
                  <li>
                    <ul>
                      {a.tagList.map((t) => {
                        return (
                          <li class="badge text-dark fw-lighter border border-secondary rounded-pill ms-2">
                            {t}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
