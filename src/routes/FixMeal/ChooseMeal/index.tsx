import { useDispatch } from 'react-redux'

import { setMealFood } from 'reducer/mealReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { food1, food2, food3, food4, food5, food6, food7, food8, food9 } from 'assets/imgs/food'
import styles from './chooseMeal.module.scss'

const meals = [food1, food2, food3, food4, food5, food6, food7, food8, food9]

const ChooseMeal = () => {
  const dispatch = useDispatch()

  const handleMealClick = (selected: number) => {
    dispatch(setMealFood(selected + 1))
  }

  const mealImgs = meals.map((meal, index) => {
    const mealKey = `meal-${index}`

    return <img key={mealKey} className={styles.mealImg} alt={`${mealKey}`} src={meal} />
  })

  return <ChooseButtonContainer items={mealImgs} handleSelectClick={handleMealClick} />
}

export default withGuideContainer(ChooseMeal, GUIDE.FIXMEAL.CHOOSEMEAL, PATH.TOFIXMEAL.SECOND)
