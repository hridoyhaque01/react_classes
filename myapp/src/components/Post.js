import { useNavigate, useParams } from "react-router-dom";

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();

  function goPosts() {
    navigate("/posts", {
      replace: true,
    });
    navigate(-2); // go back two step
  }
  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {params.postId}</p>
      <button type="button" onClick={goPosts}>
        go to post
      </button>
    </div>
  );
}
