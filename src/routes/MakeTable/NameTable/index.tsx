import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { createInfoToFirebase } from 'utils/firebaseService/firebaseDBService'
import { setTableName } from 'reducer/tableReducer'
import { selectorStateType } from 'types'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import GuideContainer from 'components/GuideContainer'

import styles from './nameTable.module.scss'

const NameTable = () => {
  const [tableName, setNameTable] = useState('')
  const userEmail = localStorage.getItem('email') && JSON.parse(localStorage.getItem('email')!).value
  const dispatch = useDispatch()
  const { tableReducer: tableInfo } = useSelector((state: selectorStateType) => state)
  const navigate = useNavigate()

  const handleInputTableName = (e: ChangeEvent<HTMLInputElement>) => {
    setNameTable(e.currentTarget.value)
    dispatch(setTableName(e.currentTarget.value))
  }

  // eslint-disable-next-line consistent-return
  const handleSubmitButtonClick = () => {
    if (!userEmail) return navigate(`/${PATH.AUTH.SIGNIN}`)

    createInfoToFirebase(userEmail, 'tableInfo', tableInfo).then(() => navigate(`/${PATH.MYTABLE}`))
  }

  return (
    <GuideContainer guideDescription={GUIDE.MAKETABLE.NAMETABLE} handleClick={handleSubmitButtonClick}>
      <div className={styles.nameTablePage}>
        <div className={styles.tableName}>
          <input className={styles.tableNameInput} type='text' value={tableName} onChange={handleInputTableName} />
          <p>상</p>
        </div>
      </div>
    </GuideContainer>
  )
}

export default NameTable
