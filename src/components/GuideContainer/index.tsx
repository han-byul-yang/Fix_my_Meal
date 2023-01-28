import MoveButton from 'components/MoveButton'

import styles from './guideContainer.module.scss'

interface IGuideContainerProps {
  children: JSX.Element | JSX.Element[]
  guideDescription: string
  handleClick: () => void
}

const GuideContainer = ({ children, guideDescription, handleClick }: IGuideContainerProps) => {
  return (
    <>
      <p className={styles.guide}>{guideDescription}</p>
      {children}
      <MoveButton handleButtonClick={handleClick}>다음으로</MoveButton>
    </>
  )
}

export default GuideContainer
