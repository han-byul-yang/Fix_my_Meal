import { useNavigate } from 'react-router-dom'

import MoveButton from 'components/MoveButton'

import tableImg from 'assets/imgs/table.png'
import styles from './main.module.scss'
import { PATH } from 'constants/pathContants'

const Main = () => {
  const navigate = useNavigate()

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.AUTH.SIGNUP}`)
  }

  return (
    <>
      <header>
        <p className={styles.mainTitle}>설날 한상 차려주오</p>
        <p className={styles.description}>
          새해 상을 차려 따뜻한 정을 나눠받고 <br /> 상의 성격을 확인해보세요.
        </p>
      </header>
      <main className={styles.main}>
        <img className={styles.tableImg} src={tableImg} alt='tableImg' />
        <MoveButton handleButtonClick={handleMoveButtonClick}>나의 새해 상 만들기</MoveButton>
      </main>
    </>
  )
}

export default Main
