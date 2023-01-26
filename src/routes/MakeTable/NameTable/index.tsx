import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setTableName } from 'reducer/tableReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'

import styles from './nameTable.module.scss'

const NameTable = () => {
  const [tableName, setNameTable] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputTableName = (e: ChangeEvent<HTMLInputElement>) => {
    setNameTable(e.currentTarget.value)
    dispatch(setTableName(e.currentTarget.value))
  }

  const handleSubmitButtonClick = () => {
    navigate(`/${PATH.MYTABLE}`)
  }

  return (
    <div className={styles.nameTablePage}>
      <div className={styles.tableName}>
        <input className={styles.tableNameInput} type='text' value={tableName} onChange={handleInputTableName} />
        <p>상</p>
      </div>
    </div>
  )
}

export default withGuideContainer(NameTable, GUIDE.MAKETABLE.NAMETABLE, PATH.MYTABLE)
