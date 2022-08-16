import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h2>Articulus</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulus: </span>
          <input
            type="text"
            name="title"
            required
            placeholder="Quid novi ?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL Imaginem: </span>
          <input
            type="text"
            name="imagem"
            required
            placeholder="Imaginem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Textus: </span>
          <textarea
            name="body"
            required
            placeholder="Insere textus"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Notam: </span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Inserere notam"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className="btn">Confirmat</button>
        {/* {!loading && <button className="btn">Confirmat</button>}
        {loading && <button className="btn" disabled>Spes...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatePost;
