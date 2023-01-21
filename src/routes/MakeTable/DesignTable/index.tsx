import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import { tableDesign } from 'constants/chooseConstants'
import withGuideContainer from 'Hocs/withGuideContainer'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import styles from './designTable.module.scss'

const DesignTable = () => {
  return <ChooseButtonContainer items={tableDesign} />
}

export default withGuideContainer(DesignTable, GUIDE.MAKETABLE.DESIGNTABLE, PATH.TOMAKETABLE.SECOND)
