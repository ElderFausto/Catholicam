import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <img src="Vaticano.png" width={400} height={330} />
      <p>
        Bem-vindo ao Catholicam, este site funciona como um blog para a publicação de conteúdo católico. Nosso objetivo é compartilhar postagens sobre a fé, a doutrina e a espiritualidade da Igreja Católica.
      </p>
      <a href="https://www.vatican.va/content/vatican/pt.html">Visite o Vatican.va</a>
    </div>
  );
};

export default About;
