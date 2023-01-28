import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <main className={styles.mainLayout}>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  )
}

export default Layout
