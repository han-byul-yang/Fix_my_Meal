import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import GuideContainer from 'components/GuideContainer'

import messagePaperImg from 'assets/imgs/messagePaper.png'
import styles from './writeMessage.module.scss'

const WriteMessage = () => {
  const [nickName, setNickName] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleWriteNickNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value)
  }

  const handleWriteMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }

  const handleMoveButtonClick = () => {
    navigate(`/${PATH.TOFIXMEAL.THIRD}`)
  }

  return (
    <GuideContainer guideDescription={GUIDE.FIXMEAL.WRITEMESSAGE} handleClick={handleMoveButtonClick}>
      <div className={styles.nickNameContainer}>
        <p>닉네임:</p>
        <input type='text' value={nickName} onChange={handleWriteNickNameChange} />
      </div>
      <div className={styles.messageContainer}>
        <textarea
          className={styles.messageText}
          name='text'
          rows={100}
          value={message}
          onChange={handleWriteMessageChange}
        />
        <img className={styles.messagePaperImg} src={messagePaperImg} alt='messagePaperImg' />
      </div>
    </GuideContainer>
  )
}

export default WriteMessage
