import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setTableColor } from 'reducer/tableReducer'
import { useMoveButtonNavigateClick } from 'hooks/useMoveButtonHandle'
import withGuideContainer from 'Hocs/withGuideContainer'
import { selectorStateType } from 'types'
import { colors } from 'constants/chooseConstants'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import GuideContainer from 'components/GuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import { TableIcon, TteokIcon } from 'assets/svgs'
import styles from './colorTable.module.scss'

const ColorTable = () => {
  const dispatch = useDispatch()
  const tableColorState = useSelector((state: selectorStateType) => state.tableReducer.color)
  const navigate = useNavigate()

  const handleTableColorClick = (selected: number) => {
    dispatch(setTableColor(selected + 1))
  }

  const tteokColor = colors.map((color, index) => {
    const colorKey = `color-${index}`
    return <TteokIcon key={colorKey} className={styles.tteokIcon} style={{ fill: `${color}` }} />
  })

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.TOMAKETABLE.THIRD}`)
  }
  return (
    <GuideContainer guideDescription={GUIDE.MAKETABLE.COLORTABLE} handleClick={handleMoveButtonClick}>
      <TableIcon className={styles.tableIcon} style={{ stroke: `${colors[tableColorState - 1]}` }} />
      <ChooseButtonContainer items={tteokColor} handleSelectClick={handleTableColorClick} />
    </GuideContainer>
  )
}

export default ColorTable
