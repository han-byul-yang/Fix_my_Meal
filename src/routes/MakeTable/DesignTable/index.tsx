import { tableDesign } from 'constants/chooseConstants'
import MoveButton from 'components/MoveButton'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import styles from './designTable.module.scss'

const DesignTable = () => {
  return (
    <>
      <p className={styles.guide}>하나. 받을 상의 디자인을 고르시오.</p>
      <ChooseButtonContainer items={tableDesign} />
      <MoveButton navigatePath='makeTable/second'>다음으로</MoveButton>
    </>
  )
}

export default DesignTable
