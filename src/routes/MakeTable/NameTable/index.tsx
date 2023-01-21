import { ChangeEvent, useState } from 'react'

import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'

import styles from './nameTable.module.scss'

const NameTable = () => {
  const [tableName, setTableName] = useState('')

  const handleInputTableName = (e: ChangeEvent<HTMLInputElement>) => {
    setTableName(e.currentTarget.value)
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
