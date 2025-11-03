import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_card}>
      <Link to={`/posts/${post.id}`} className={styles.image_link}>
        <img src={post.image} alt={post.title} className={styles.image} />
      </Link>
      
      <div className={styles.content}>
        <h2>{post.title}</h2>
        
        <p className={styles.createdby}>publicado por: @{post.createdBy}</p>
        
        <div className={styles.tags}>
          {post.tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
        
        <Link to={`/posts/${post.id}`} className="btn btn-outline">
          Ler mais
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;