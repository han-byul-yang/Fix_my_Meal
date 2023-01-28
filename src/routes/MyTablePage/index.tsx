import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PATH } from 'constants/pathContants'
import MoveButton from 'components/MoveButton'

import tableImg from 'assets/imgs/table.png'
import styles from './myTablePage.module.scss'

const MyTablePage = () => {
  const navigate = useNavigate()

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.MYTABLE}`)
  }

  return (
    <div>
      <div className={styles.tableTitle}>
        <span>한별</span>
        <span>님의</span>
        <span>예쁜 명절</span>
        <span>상</span>
      </div>
      <p className={styles.totalNumberTitle}>총 8명으로부터 상차림을 받았소.</p>
      <img className={styles.tableImg} src={tableImg} alt='tableImg' />
      <MoveButton handleButtonClick={handleMoveButtonClick}>상 바꾸기</MoveButton>
      <MoveButton handleButtonClick={handleMoveButtonClick}>나의 상 성격 확인하기</MoveButton>
    </div>
  )
}

export default MyTablePage
