import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setMealColor } from 'reducer/mealReducer'
import { colors } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import GuideContainer from 'components/GuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { TteokIcon } from 'assets/svgs'
import styles from './colorDish.module.scss'

const ColorDish = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePocketColorClick = (selected: number) => {
    dispatch(setMealColor(selected))
  }

  const tteokColor = colors.map((color, index) => {
    const colorKey = `color-${index}`
    return <TteokIcon key={colorKey} className={styles.tteokIcon} style={{ fill: `${color}` }} />
  })

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.TOFIXMEAL.SEND}`)
  }

  return (
    <GuideContainer guideDescription={GUIDE.FIXMEAL.COLORDISH} handleClick={handleMoveButtonClick}>
      <ChooseButtonContainer items={tteokColor} handleSelectClick={handlePocketColorClick} />
    </GuideContainer>
  )
}

export default ColorDish
