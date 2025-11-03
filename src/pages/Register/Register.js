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
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <div className={styles.form_container}>
        <h1>Criar conta</h1>
        <form onSubmit={handleSubmit}>
          <label>
          
            <span>Nome: </span>
            <input
              type="text"
              name="displayName"
              required
          
              placeholder="Seu nome"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
          
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              required
        
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
          
            <span>Senha: </span>
            <input
              type="password"
              name="password"
              required
              // Traduzido de "Secretum tuum *"
              placeholder="Sua senha *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirme sua senha: </span>
            <input
              type="password"
              name="confirmPassword"
              required
              // Traduzido de "Confirmatione secretum tuum *"
              placeholder="Confirme sua senha *"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {/* Traduzido de "Confirmat" */}
          {!loading && <button className="btn">Cadastrar</button>}
      
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {/* CORREÇÃO: Usando styles.error para um visual melhor */}
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;