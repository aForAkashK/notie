import Head from "next/head";
import styles from "../../styles/Home.module.scss";

function Welcome() {
  return (
    <div className={`${styles.container} ${styles.wrapperBox}`}>
      <Head>
        <title>Welcome To Notie</title>
        <meta name="description" content="welocome to notie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
      </div>
      <div className={styles.frame_wrapper}>
        <p className={styles.main_header}>
          NOTIEE
        </p>
        <p className={styles.sub_header}>
          cloud note app
        </p>
        <p className={styles.text_cotent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum beatae quia iure accusantium delectus, quasi expedita earum doloremque asperiores repellat voluptatem eligendi, odit voluptatum perspiciatis? Praesentium dolorum eaque quos.
        </p>
      </div>
      
    </div>
  )
}

export default Welcome;
