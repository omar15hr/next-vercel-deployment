import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import Head from 'next/head';

export const MainLayout = ({ children }:any) => {

    return (
        <>
          <Head>
            <title>Home - Omar</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={`${styles.main} ${styles.className}`}>
            { children }
          </main>
        </>
      )
}; 