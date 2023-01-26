import { useDispatch, useSelector } from 'react-redux'

import { setTableColor } from 'reducer/tableReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { selectorStateType } from 'types'
import { colors } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { TableIcon, TteokIcon } from 'assets/svgs'
import styles from './colorTable.module.scss'

const ColorTable = () => {
  const dispatch = useDispatch()
  const tableColorState = useSelector((state: selectorStateType) => state.tableReducer.color)

  const handleTableColorClick = (selected: number) => {
    dispatch(setTableColor(selected + 1))
  }

  const tteokColor = colors.map((color, index) => {
    const colorKey = `color-${index}`
    return <TteokIcon key={colorKey} className={styles.tteokIcon} style={{ fill: `${color}` }} />
  })

  return (
    <>
      <TableIcon className={styles.tableIcon} style={{ stroke: `${colors[tableColorState - 1]}` }} />
      <ChooseButtonContainer items={tteokColor} handleSelectClick={handleTableColorClick} />
    </>
  )
}

export default withGuideContainer(ColorTable, GUIDE.MAKETABLE.COLORTABLE, PATH.TOMAKETABLE.THIRD)
