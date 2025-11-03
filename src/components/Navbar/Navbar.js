import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Catholicam
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {/* Alterado de "Donum ⛪" */}
            Início
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {/* Alterado de "Intrare ⚜️" */}
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {/* Alterado de "Creare 📝" */}
                Registrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
          <li>
            <NavLink
              to="/posts/create"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {/* Alterado de "Periodicum 📜" */}
              Novo Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {/* Alterado de "Quadratorum 🖼️" */}
              Dashboard
            </NavLink>
          </li>
        </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {/* Alterado de "De nobis ⚔️" */}
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            {/* Alterado de "Exite ➡️" */}
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;