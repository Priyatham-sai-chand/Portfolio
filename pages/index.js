import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className= {styles.page}>
        

      <main className={styles.main}>
        <h2 className={styles.title}>Priyatham Sai Chand</h2>
          <div className={styles.content}><div className={ styles.content__container }>
            <p className={ styles.content__container__text }>
              I'm am</p>

            <ul className={ styles.content__container__list }>
              <li className={ styles.content__container__list__item }>a Programmer</li>
              <li className={ styles.content__container__list__item }>a Full stack Dev</li>
              <li className={ styles.content__container__list__item }>an Application Developer</li>
              <li className={ styles.content__container__list__item }>a Techie</li>
            </ul>
            </div></div>
      </main>
    </div>
            
          
        
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.grid}>
          <a href="https://github.com/Priyatham-sai-chand/Locaft" className={styles.card}>
            <h3>Locaft &rarr;</h3>
            <p>A logistics and renting website for both owners and tenants alike</p>
          </a>

          <a href="https://github.com/Priyatham-sai-chand/Steganography-in-C" className={styles.card}>
            <h3>Steganography &rarr;</h3>
            <p>Hiding images in plain bitmap images</p>
          </a>

          <a
            href="https://github.com/Priyatham-sai-chand/Auction"
            className={styles.card}
          >
            <h3>Auction &rarr;</h3>
            <p>An Auctioning system for bidding items to the highest bidder using 
              Django
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Alz. &rarr;</h3>
            <p>
              A Mobile application to detect Alzheimers' prematurely.
            </p>
          </a>
        </div>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Priyatham-sai-chand/alzapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}