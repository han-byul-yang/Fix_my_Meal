import { useState } from 'react'

import ChooseButton from 'components/ChooseButton'

import styles from './chooseButtonContainer.module.scss'

interface chooseButtonContainerProps {
  items: string[] | any[]
  handleSelectClick: (selected: number) => void
}

const ChooseButtonContainer = ({ items, handleSelectClick }: chooseButtonContainerProps) => {
  const [selectedDesign, setSelectedDesign] = useState('')

  return (
    <div className={styles.chooseButtonContainer}>
      <div className={styles.chooseButtonBox}>
        {items.map((design, index) => {
          const designKey = `design-${index}`

          return (
            <ChooseButton
              key={designKey}
              setSelectedDesign={setSelectedDesign}
              selectedDesign={selectedDesign}
              handleSelectClick={() => handleSelectClick(index)}
            >
              {design}
            </ChooseButton>
          )
        })}
      </div>
    </div>
  )
}

export default ChooseButtonContainer
