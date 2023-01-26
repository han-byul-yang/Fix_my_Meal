import { useDispatch } from 'react-redux'

import { setTableDesign } from 'reducer/tableReducer'
import withGuideContainer from 'Hocs/withGuideContainer'
import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import ChooseButtonContainer from 'components/ChooseButtonContainer'

import {
  TableDesign1Icon,
  TableDesign2Icon,
  TableDesign3Icon,
  TableDesign4Icon,
  TableDesign5Icon,
  TableDesign6Icon,
  TableDesign7Icon,
  TableDesign8Icon,
} from 'assets/svgs'
import styles from './designTable.module.scss'

const tableDesign = [
  <TableDesign1Icon key={1} className={styles.tableDesign} />,
  <TableDesign2Icon key={2} className={styles.tableDesign} />,
  <TableDesign3Icon key={3} className={styles.tableDesign} />,
  <TableDesign4Icon key={4} className={styles.tableDesign} />,
  <TableDesign5Icon key={5} className={styles.tableDesign} />,
  <TableDesign6Icon key={6} className={styles.tableDesign} />,
  <TableDesign7Icon key={7} className={styles.tableDesign} />,
  <TableDesign8Icon key={8} className={styles.tableDesign} />,
]

const DesignTable = () => {
  const dispatch = useDispatch()

  const handleTableDesignClick = (selected: number) => {
    dispatch(setTableDesign(selected + 1))
  }

  return <ChooseButtonContainer items={tableDesign} handleSelectClick={handleTableDesignClick} />
}

export default withGuideContainer(DesignTable, GUIDE.MAKETABLE.DESIGNTABLE, PATH.TOMAKETABLE.SECOND)