import styles from './moveButton.module.scss'

interface moveButtonProps {
  children: string
  handleButtonClick: () => void
}

const MoveButton = ({ children, handleButtonClick }: moveButtonProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.moveButton} onClick={handleButtonClick}>
      {children}
    </div>
  )
}

export default MoveButton
