import { Route, Routes } from 'react-router-dom'

import Main from './Main'
import Auth from './Auth'
import DesignTable from './MakeTable/DesignTable'
import ColorTable from './MakeTable/ColorTable'
import NameTable from './MakeTable/NameTable'
import MyTablePage from './MyTablePage'
import ChooseMeal from './FixMeal/ChooseMeal'
import ChooseDish from './FixMeal/ChooseDish'
import ColorDish from './FixMeal/ColorDish'
import WriteMessage from './FixMeal/WriteMessage'
import Layout from 'components/Layout'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route element={<Layout />}>
            <Route path='signUp' element={<Auth type='signUp' />} />
            <Route path='signIn' element={<Auth type='signIn' />} />
            <Route path='makeTable/first' element={<DesignTable />} />
            <Route path='makeTable/second' element={<ColorTable />} />
            <Route path='makeTable/third' element={<NameTable />} />
            <Route path='myTable' element={<MyTablePage />} />
            <Route path='fixMeal/first' element={<ChooseMeal />} />
            <Route path='fixMeal/second' element={<WriteMessage />} />
            <Route path='fixMeal/third' element={<ChooseDish />} />
            <Route path='fixMeal/fourth' element={<ColorDish />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
