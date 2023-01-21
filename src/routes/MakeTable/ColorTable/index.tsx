import { color } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import tableImg from 'assets/imgs/table.png'
import styles from './colorTable.module.scss'

const ColorTable = () => {
  return (
    <>
      <img className={styles.tableImg} src={tableImg} alt='tableImg' />
      <ChooseButtonContainer items={color} />
    </>
  )
}

export default withGuideContainer(ColorTable, GUIDE.MAKETABLE.COLORTABLE, PATH.TOMAKETABLE.THIRD)
