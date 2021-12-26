function Comments(props) {
  return (
    <div>
      {props.comment.map((c) => {
        return (
          <div class="card mb-3">
            <div class="card-body">
                {c.body}
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center mt-4">
                <figure>
                  <img
                    src={c.author.image}
                    class="border rounded-circle"
                    alt="user"
                    style={{height:'2rem'}}
                  />
                </figure>
                <div>
                  <ul class="list-unstyled mx-2 d-flex">
                    <li class="text-success mx-2">{c.author.username}</li>
                    <li class="fw-lighter">Wed Nov 24 2021</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
