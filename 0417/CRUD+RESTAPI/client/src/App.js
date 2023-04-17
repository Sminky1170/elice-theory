import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Forum />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const postList = posts.map((post) => (
    <div key={post._id}>
      <h3 style={{ marginRight: 10, display: "inline" }}>{post.title}</h3>
      <Link to={`/post/${post._id}`}>글 보기</Link>
    </div>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("http://localhost:4000/posts", {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([...posts, data.post]);
      });
  };
  return (
    <div>
      <h2>게시판</h2>
      {postList}
      <h3>Create new post</h3>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input type="text" name="title" />
        </label>
        <br />
        <br />
        <label>
          내용:
          <textarea name="content"></textarea>
        </label>
        <br />
        <button type="submit">생성</button>
      </form>
    </div>
  );
};

function Post() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [edit, setEdit] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }, [id]);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/posts/${id}`, {
      method: "DELETE",
    }).then(() => (window.location.href = "/"));
  };

  const handleUpdate = () => {
    setEdit(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(`http://localhost:4000/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEdit(false);
        setPost(data.post);
      });
  };

  return edit ? (
    <form onSubmit={handleSubmit}>
      <label>
        제목:
        <input type="text" name="title" />
      </label>
      <br />
      <br />
      <label>
        내용:
        <textarea name="content"></textarea>
      </label>
      <br />
      <button type="submit">수정</button>
    </form>
  ) : (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to={`/`}>목록으로</Link>
      <button onClick={() => handleUpdate(post._id)}>Update</button>
      <button onClick={() => handleDelete(post._id)}>Delete</button>
    </div>
  );
}

export default App;
