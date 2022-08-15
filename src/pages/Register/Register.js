import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("Secreto idem esse debet!");
      return;
    }

    const res = await createUser(user)

    console.log(res);
  };

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nomen: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nomen tuum"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Epistularum tuum: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Epistularum@tuum"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Secreto: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Secretum tuum *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmate: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirmatione secretum tuum *"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Confirmat</button>}
        {loading && <button className="btn" disabled>Spes...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
