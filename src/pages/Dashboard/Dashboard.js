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
    return <p>Spes...</p>;
  }

  return (
    <div className={styles.dashboard}>
      <h2>Quadratorum</h2>
      <p>Imago procuratio</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Non invenerunt!</p>
          <Link to="/posts/create" className="btn">
            Primogenitus periodicum
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Titulus</span>
            <span>Actus</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Videre
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Ad edit
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Delere
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
