import { useDispatch } from 'react-redux'

import { setMealDesign } from 'reducer/mealReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { Pocket1Icon, Pocket2Icon, Pocket3Icon, Pocket4Icon, Pocket5Icon, Pocket6Icon } from 'assets/svgs'
import styles from './chooseDish.module.scss'

const dishDesign = [
  <Pocket1Icon key={1} className={styles.pocketIcon} />,
  <Pocket2Icon key={2} className={styles.pocketIcon} />,
  <Pocket3Icon key={3} className={styles.pocketIcon} />,
  <Pocket4Icon key={4} className={styles.pocketIcon} />,
  <Pocket5Icon key={5} className={styles.pocketIcon} />,
  <Pocket6Icon key={6} className={styles.pocketIcon} />,
]
const ChooseDish = () => {
  const dispatch = useDispatch()

  const handlePocketDesignClick = (selected: number) => {
    dispatch(setMealDesign(selected))
  }

  return <ChooseButtonContainer items={dishDesign} handleSelectClick={handlePocketDesignClick} />
}

export default withGuideContainer(ChooseDish, GUIDE.FIXMEAL.CHOOSEDISH, PATH.TOFIXMEAL.FOURTH)