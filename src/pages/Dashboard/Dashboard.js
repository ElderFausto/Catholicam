import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // posts do usuario
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard}>
      <h2>Painel</h2>
      <p>Gerencie as suas postagens</p>
      
      <div className={styles.post_list_container}>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Nenhuma postagem encontrada!</p>
            <Link to="/posts/create" className="btn">
              Criar primeira postagem
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>
            </div>

            {posts &&
              posts.map((post) => (
                <div key={post.id} className={styles.post_row}>
                  <p>{post.title}</p>
                  <div className={styles.actions}>
                    <Link to={`/posts/${post.id}`} className="btn btn-outline">
                      Ver
                    </Link>
                    <Link
                      to={`/posts/edit/${post.id}`}
                      className="btn btn-outline"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteDocument(post.id)}
                      // CORREÇÃO: Classe "btn-outline" removida
                      className="btn btn-danger"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;