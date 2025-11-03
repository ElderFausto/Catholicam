import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h3>Unam, Sanctam, Catholicam et Apostolicam Ecclesiam.</h3>
      <p>Catholicam &copy; {currentYear}</p>
    </footer>
  )
}

export default Footer