import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DocumentData } from 'firebase/firestore'

import { getDocsFromFirebase } from 'utils/firebaseService/firebaseDBService'
import { colors } from 'constants/chooseConstants'
import { PATH } from 'constants/pathContants'
import MoveButton from 'components/MoveButton'

import {
  TableIcon,
  TableDesign1Icon,
  TableDesign2Icon,
  TableDesign3Icon,
  TableDesign4Icon,
  TableDesign5Icon,
  TableDesign6Icon,
  TableDesign7Icon,
  TableDesign8Icon,
} from 'assets/svgs'
import styles from './myTablePage.module.scss'

const MyTablePage = () => {
  const [userInfo, setUserInfo] = useState<DocumentData>({})
  const [tableInfo, setTableInfo] = useState<DocumentData>({})
  const userEmail = localStorage.getItem('email') && JSON.parse(localStorage.getItem('email')!).value
  const navigate = useNavigate()

  const tableDesign = [
    <TableDesign1Icon key={1} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign2Icon key={2} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign3Icon key={3} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign4Icon key={4} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign5Icon key={5} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign6Icon key={6} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign7Icon key={7} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
    <TableDesign8Icon key={8} className={styles.tableDesign} style={{ fill: `${colors[tableInfo.color - 1]}` }} />,
  ]

  useEffect(() => {
    if (userEmail) {
      getDocsFromFirebase(userEmail, 'userInfo').then((data) => setUserInfo(data.data()!))
      getDocsFromFirebase(userEmail, 'tableInfo').then((data) => setTableInfo(data.data()!))
    } else navigate('/signIn')
  }, [navigate, userEmail])

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.MYTABLE}`)
  }

  return (
    <>
      <div className={styles.tableTitle}>
        <span>{userInfo.nickName}</span>
        <span>님의</span>
        <span>{tableInfo.name}</span>
        <span>상</span>
      </div>
      <p className={styles.totalNumberTitle}>총 {userInfo.writeNum}명으로부터 상차림을 받았소.</p>
      <div className={styles.table}>
        <TableIcon className={styles.tableIcon} style={{ stroke: `${colors[tableInfo.color]}` }} />
        {tableDesign[tableInfo.design]}
      </div>
      <MoveButton handleButtonClick={handleMoveButtonClick}>상 바꾸기</MoveButton>
      <MoveButton handleButtonClick={handleMoveButtonClick}>나의 상 성격 확인하기</MoveButton>
    </>
  )
}

export default MyTablePage
