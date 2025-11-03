# ⛪ Catholicam - Um blog Católico

![Licença MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Tecnologia](https://img.shields.io/badge/React-22-61DAFB?logo=react)
![Tecnologia](https://img.shields.io/badge/Firebase-v9-FFCA28?logo=firebase)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

Este repositório contém o código-fonte do Catholicam, uma plataforma de blog responsiva e moderna construída com React e Firebase, focada em conteúdo católico.

### <img width="1229" height="881" alt="image" src="https://github.com/user-attachments/assets/37d25b3b-35f9-4429-921d-bc768beef99b" />

## 📖 Sobre o Projeto

O Catholicam é um blog completo que permite a usuários criar, ler, editar e deletar suas próprias postagens. O projeto foi totalmente refatorado de um tema "dark" para um design "clean" e profissional (estilo Apple), com foco em tipografia e legibilidade.

A aplicação é integrada ao Firebase, utilizando **Authentication** para gerenciamento de usuários e **Firestore** para o banco de dados de postagens.

## ✨ Recursos Principais (Key Features)

* **Autenticação de Usuários:** Sistema completo de Login e Registro usando Firebase Auth.
* **Operações CRUD:** Usuários autenticados podem **C**riar, **L**er, **A**tualizar e **D**eletar (CRUD) suas próprias postagens.
* **Segurança (Regras do Firebase):** Implementação de regras de segurança no Firestore que garantem que usuários só possam editar ou excluir os posts que eles mesmos criaram.
* **Design Responsivo:** Interface moderna (estilo Apple) que se adapta perfeitamente a desktops e dispositivos móveis.
* **Rotas Protegidas:** O "Dashboard" e as páginas de "Criar/Editar Post" são acessíveis apenas para usuários logados.
* **Busca Dinâmica:** Funcionalidade de busca para filtrar posts por tags.
* **Gerenciamento de Chaves:** As chaves do Firebase são protegidas usando variáveis de ambiente (`.env`) e cadastradas de forma segura na Vercel.

## 🛠️ Tecnologias Utilizadas

* **Front-End:**
    * React (v18)
    * React Router (v6)
    * React Hooks (useState, useEffect, useContext)
    * CSS Modules
* **Back-End (BaaS):**
    * Firebase v9 (Authentication)
    * Firebase v9 (Firestore Database)
* **Deploy:**
    * Vercel

## 🚀 Rodando o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ElderFausto/Catholicam.git](https://github.com/ElderFausto/Catholicam.git)
    cd Catholicam
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie as Variáveis de Ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Copie o conteúdo do arquivo `.env.example` (se existir) ou use o modelo abaixo e preencha com suas próprias chaves do Firebase.
    ```.env
    REACT_APP_API_KEY="SUA_API_KEY"
    REACT_APP_AUTH_DOMAIN="SEU_AUTH_DOMAIN"
    REACT_APP_PROJECT_ID="SEU_PROJECT_ID"
    REACT_APP_STORAGE_BUCKET="SEU_STORAGE_BUCKET"
    REACT_APP_MESSAGING_SENDER_ID="SEU_SENDER_ID"
    REACT_APP_APP_ID="SEU_APP_ID"
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    O aplicativo estará disponível em `http://localhost:3000`.

## 🤝 Contato

Se você tiver qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato:

* **Email:** elderfavsto@gmail.com
* **GitHub:** [@ElderFausto](https://github.com/ElderFausto)

## 📰 Licença

Este projeto está sob a licença MIT.
