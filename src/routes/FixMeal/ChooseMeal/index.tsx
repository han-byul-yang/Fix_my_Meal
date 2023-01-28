import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setMealFood } from 'reducer/mealReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import GuideContainer from 'components/GuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { food1, food2, food3, food4, food5, food6, food7, food8, food9 } from 'assets/imgs/food'
import styles from './chooseMeal.module.scss'

const meals = [food1, food2, food3, food4, food5, food6, food7, food8, food9]

const ChooseMeal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleMealClick = (selected: number) => {
    dispatch(setMealFood(selected + 1))
  }

  const mealImgs = meals.map((meal, index) => {
    const mealKey = `meal-${index}`

    return <img key={mealKey} className={styles.mealImg} alt={`${mealKey}`} src={meal} />
  })

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.TOFIXMEAL.SECOND}`)
  }

  return (
    <GuideContainer guideDescription={GUIDE.FIXMEAL.CHOOSEMEAL} handleClick={handleMoveButtonClick}>
      <ChooseButtonContainer items={mealImgs} handleSelectClick={handleMealClick} />
    </GuideContainer>
  )
}

export default ChooseMeal
