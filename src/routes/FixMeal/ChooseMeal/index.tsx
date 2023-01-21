import { meal } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

const ChooseMeal = () => {
  return <ChooseButtonContainer items={meal} />
}

export default withGuideContainer(ChooseMeal, GUIDE.FIXMEAL.CHOOSEMEAL, PATH.TOFIXMEAL.SECOND)
