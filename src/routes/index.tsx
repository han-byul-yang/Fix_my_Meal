import { Route, Routes } from 'react-router-dom'

import Main from './Main'
import Auth from './Auth'
import ChooseDesign from './MakeTable/ChooseDesign'
import ChooseColor from './MakeTable/ChooseColor'
import NameTable from './MakeTable/NameTable'
import Layout from 'components/Layout'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route element={<Layout />}>
            <Route path='login' element={<Auth />} />
            <Route path='makeTable/first' element={<ChooseDesign />} />
            <Route path='makeTable/second' element={<ChooseColor />} />
            <Route path='makeTable/third' element={<NameTable />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
