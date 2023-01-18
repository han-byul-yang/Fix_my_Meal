import { useNavigate } from 'react-router-dom'

import styles from './moveButton.module.scss'

interface moveButtonProps {
  children: string
  navigatePath: string
}

const MoveButton = ({ children, navigatePath }: moveButtonProps) => {
  const navigate = useNavigate()

  const handleMoveButtonClick = () => {
    navigate(`/${navigatePath}`)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.moveButton} onClick={handleMoveButtonClick}>
      {children}
    </div>
  )
}

export default MoveButton
