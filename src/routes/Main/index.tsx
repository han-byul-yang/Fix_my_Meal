import MoveButton from 'components/MoveButton'

import tableImg from 'assets/imgs/table.png'
import styles from './main.module.scss'

const Main = () => {
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
        <MoveButton navigatePath='signUp'>나의 새해 상 만들기</MoveButton>
      </main>
    </>
  )
}

export default Main
