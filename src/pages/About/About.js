import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <img src="Vaticano.png" width={400} height={330} />
      <p>
        Igreja Católica Apostólica Romana é uma igreja fundada de acordo com os
        ensinamentos de Jesus Cristo e que tem o apóstolo Pedro como figura de
        destaque, pois foi através dele que a Igreja começou a ser edificada
        (Mateus 16:18). É una, santa, católica (universal) e apostólica e como
        sacramento único de salvação, por vontade de Cristo, tem como
        característica a indefectibilidade (subsistirá até o fim do mundo) e a
        infalibilidade. A Igreja Católica é a única Igreja de Cristo e por isso
        se chama católica. É constituída por igrejas particulares ou dioceses,
        sendo cada uma destas, confiada a um bispo em comunhão com o sucessor de
        Pedro (o Papa ou vigário de Cristo). Encontram-se em comunhão com a
        Igreja católica os batizados que estão unidos com Cristo no Seu corpo
        visível pelos vínculos da fé, dos sacramentos e da disciplina
        eclesiástica. As Igrejas Católicas Orientais são Igrejas particulares
        (sui iuris) em plena comunhão com o Papa, fazendo por isso parte da
        Igreja Católica. Em número de 23, elas conservam as seculares tradições
        litúrgicas e devocionais das várias igrejas orientais com as quais estão
        associadas historicamente. .Para a Igreja Católica o Papa, Bispo de Roma
        que reside no Vaticano, é o representante visível de Cristo na terra e a
        cabeça visível da Igreja. Como sucessor do chefe dos apóstolos, Pedro
        (sucessão apostólica), o Papa é o legítimo detentor da suprema
        autoridade hierárquica da Igreja.
      </p>
      <a href="https://www.vatican.va/content/vatican/pt.html">Documenta Latina</a>
    </div>
  );
};

export default About;
