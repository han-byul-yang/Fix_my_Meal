import { dishDesign } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import tableImg from 'assets/imgs/table.png'
import styles from './chooseDish.module.scss'

const ChooseDish = () => {
  return (
    <>
      <img className={styles.tableImg} src={tableImg} alt='tableImg' />
      <ChooseButtonContainer items={dishDesign} />
    </>
  )
}

export default withGuideContainer(ChooseDish, GUIDE.FIXMEAL.CHOOSEDISH, PATH.TOFIXMEAL.THIRD)
