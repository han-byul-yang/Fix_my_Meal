import React, { Dispatch } from 'react'
import cx from 'classnames'

import styles from './chooseButton.module.scss'

interface chooseButtonProps {
  children: any
  setSelectedDesign: Dispatch<React.SetStateAction<string>>
  selectedDesign: string
  handleSelectClick: () => void
}

const ChooseButton = ({ children, setSelectedDesign, selectedDesign, handleSelectClick }: chooseButtonProps) => {
  const handleChooseButtonClick = (clickedDesign: string) => {
    setSelectedDesign(clickedDesign)
    handleSelectClick()
  }

  return (
    <button
      className={cx(styles.chooseButton, { [styles.activeBorder]: children === selectedDesign })}
      type='button'
      onClick={() => handleChooseButtonClick(children)}
    >
      {children}
    </button>
  )
}

export default ChooseButton
