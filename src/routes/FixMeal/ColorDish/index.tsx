import { useDispatch } from 'react-redux'

import { setMealColor } from 'reducer/mealReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { colors } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { TteokIcon } from 'assets/svgs'
import styles from './colorDish.module.scss'

const ColorDish = () => {
  const dispatch = useDispatch()

  const handlePocketColorClick = (selected: number) => {
    dispatch(setMealColor(selected + 1))
  }

  const tteokColor = colors.map((color, index) => {
    const colorKey = `color-${index}`
    return <TteokIcon key={colorKey} className={styles.tteokIcon} style={{ fill: `${color}` }} />
  })

  return <ChooseButtonContainer items={tteokColor} handleSelectClick={handlePocketColorClick} />
}

export default withGuideContainer(ColorDish, GUIDE.FIXMEAL.COLORDISH, PATH.TOFIXMEAL.SEND)
