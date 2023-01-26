import { colors } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { TteokIcon } from 'assets/svgs'

const ColorDish = () => {
  const tteokColor = colors.map((color, index) => {
    const colorKey = `color-${index}`
    return <TteokIcon key={colorKey} style={{ fill: `${color}` }} />
  })

  return <ChooseButtonContainer items={tteokColor} />
}

export default withGuideContainer(ColorDish, GUIDE.FIXMEAL.COLORDISH, PATH.TOFIXMEAL.SEND)
