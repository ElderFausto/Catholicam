import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import styles from "./CreatePost.module.css";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const {user} = useAuthValue()
  const {insertDocument, response} = useInsertDocument('posts')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('')

    //validade image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError('Oportet esse URL!')
    }


    //criar o array de tags

    const tagsArray = tags.split(',').map((tag)=> tag.trim().toLowerCase());

    //checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError('Imple omnia!')
    }

    if (formError) return;


    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect to home page
    navigate('/')

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
            placeholder="Scribere titulum..."
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
            rows={5}
            cols={8}
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
        {!response.loading && <button className="btn">Confirmat</button>}
        {response.loading && <button className="btn" disabled>Spes...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
