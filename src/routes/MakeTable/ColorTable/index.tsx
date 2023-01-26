import { colors } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { TableIcon, TteokIcon } from 'assets/svgs'
import styles from './colorTable.module.scss'

const ColorTable = () => {
  const tteokColor = colors.map((color, index) => {
    const colorKey = `color-${index}`
    return <TteokIcon key={colorKey} style={{ fill: `${color}` }} />
  })

  return (
    <>
      <TableIcon className={styles.tableIcon} />
      <ChooseButtonContainer items={tteokColor} />
    </>
  )
}

export default withGuideContainer(ColorTable, GUIDE.MAKETABLE.COLORTABLE, PATH.TOMAKETABLE.THIRD)
