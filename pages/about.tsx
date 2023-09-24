import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { ReactElement } from 'react';


import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'


import { NextPageWithLayout } from './_app';

const inter = Inter({ subsets: ['latin'] })

const About: NextPageWithLayout = () => {
  return (
    <Link href='/'>
      <h1>About</h1>
      <h1>Ir a Home</h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Link para cambio de pagina sin el anchor tag */}
      <h1 className={styles.title}>
      Ir a <Link href="/about">About</Link>
      </h1>
    </Link>
  );
};

export default About;

About.getLayout = function getLayout( page: ReactElement ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
