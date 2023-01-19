import { tableColor } from 'constants/chooseConstants'
import MoveButton from 'components/MoveButton'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import tableImg from 'assets/imgs/table.png'
import styles from './colorTable.module.scss'

const ColorTable = () => {
  return (
    <>
      <p className={styles.guide}>둘. 상의 색상을 고르시오.</p>
      <img className={styles.tableImg} src={tableImg} alt='tableImg' />
      <ChooseButtonContainer items={tableColor} />
      <MoveButton navigatePath='makeTable/third'>다음으로</MoveButton>
    </>
  )
}

export default ColorTable
