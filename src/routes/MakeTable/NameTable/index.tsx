import { ChangeEvent, useState } from 'react'

import MoveButton from 'components/MoveButton'

import styles from './nameTable.module.scss'

const NameTable = () => {
  const [tableName, setTableName] = useState('')

  const handleInputTableName = (e: ChangeEvent<HTMLInputElement>) => {
    setTableName(e.currentTarget.value)
  }

  return (
    <div className={styles.nameTablePage}>
      <p className={styles.guide}>셋. 상의 이름을 정해주시오.</p>
      <div className={styles.tableName}>
        <input className={styles.tableNameInput} type='text' value={tableName} onChange={handleInputTableName} />
        <p>상</p>
      </div>
      <MoveButton navigatePath='myTable'>다음으로</MoveButton>
    </div>
  )
}

export default NameTable
