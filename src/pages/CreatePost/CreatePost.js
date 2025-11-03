import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import styles from "./CreatePost.module.css";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(""); // Alterado para string vazia
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
      setFormError('A imagem precisa ser uma URL válida.')
    }

    //criar o array de tags
    const tagsArray = tags.split(',').map((tag)=> tag.trim().toLowerCase());

    //checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError('Por favor, preencha todos os campos.')
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
      {/* Container do "Card" */}
      <div className={styles.form_container}>
        <h2>Criar nova postagem</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título: </span>
            <input
              type="text"
              name="title"
              required
              placeholder="Escreva um título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>URL da Imagem: </span>
            <input
              type="text"
              name="imagem"
              required
              placeholder="Cole a URL da imagem"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span>Conteúdo: </span>
            <textarea
              rows={5}
              cols={8}
              name="body"
              required
              placeholder="Escreva o conteúdo do post..."
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </label>
          <label>
            <span>Tags: </span>
            <input
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>
          {!response.loading && <button className="btn">Criar Post</button>}
          {response.loading && <button className="btn" disabled>Aguarde...</button>}
          {response.error && <p className={styles.error}>{response.error}</p>}
          {formError && <p className={styles.error}>{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;