import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

// Renombramos el archivo a index para que por defecto la carpeta tome el valor del page
// Asi de esta manera podemos trabajar mas organizados por si desplegamos varias paginas en el contact

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing</h1>

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
      Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  )
}
