import { getContainerCount } from '@/features/storage'

import styles from './page.module.css'

export const dynamic = 'force-dynamic'; // don't try to SSG this

export default async function Home() {
  const containerCount = await getContainerCount();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
    <div>Container count: {containerCount}</div>
    </div>
    </main>
  )
}
