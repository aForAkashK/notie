import Navbar from './Navbar';
import Welcome from './welcome/Welcome';
import styles from "../styles/Home.module.scss"
function Base() {

  return (
    <div className={styles.welcome_wrapper}>
        <Navbar />
        <Welcome />
    </div>
  )
}

export default Base;