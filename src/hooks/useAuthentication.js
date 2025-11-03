import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // limpeza
  // lida com vazamento de memória
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // Hook de Criar Usuário
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        // Traduzido de: "Debilis secreto, VI characteres non requiritur."
        systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        // Traduzido de: "Epistularum@ iam exstat."
        systemErrorMessage = "Este e-mail já está cadastrado.";
      } else {
        // Traduzido de: "Error, postea experiri."
        systemErrorMessage = "Ocorreu um erro, por favor, tente mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // Hook de Logout
  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  // Hook de Login
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        // Traduzido de: "Non existat!"
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        // Traduzido de: "Debilis secreto!"
        systemErrorMessage = "Senha incorreta.";
      } else {
        // Traduzido de: "Error, postea experiri."
        systemErrorMessage = "Ocorreu um erro, por favor, tente mais tarde.";
      }
      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};