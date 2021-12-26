import Card from "../components/Card";

function Home() {
  return (
    <div>
      <div className="container-fluid bg-success pt-5 pb-5 ">
        <div class="text-center text-light">
          <h1>vibes</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-8">
            <div class="pt-3 ">
              <div>
                <ul class="list-unstyled border-bottom d-flex">
                  <li class="text-success border-bottom border-success border-2 pb-2">
                    Global Feed
                  </li>
                </ul>
              </div>
            </div>
            <Card />
          </div>
          <div class="col-2 mt-4">
            <span class="badge bg-light text-dark fw-normal p-2 px-5">
              Popular Tags
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
