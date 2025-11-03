import styles from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//components
import PostDetail from "../../components/PostDetail.js/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      {/* Alterado de "Periodicis" */}
      <h1>Postagens</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          // Alterado de "Quaerere per notam..."
          placeholder="Buscar por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">🔍</button>
      </form>
      <div className="container-home">
        {/* Alterado de "Spes..." */}
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            {/* Alterado de "Non possum invenire descriptionem..." */}
            <p>Não foram encontradas postagens...</p>
            <Link to="/posts/create" className="a_home">
              {/* Alterado de "Creo periodicus" */}
              Criar postagem📜
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;