import { ChangeEvent, useState } from 'react'

import { GUIDE } from 'constants/guideContants'
import { PATH } from 'constants/pathContants'
import withGuideContainer from 'Hocs/withGuideContainer'

import messagePaperImg from 'assets/imgs/messagePaper.png'
import styles from './writeMessage.module.scss'

const WriteMessage = () => {
  const [nickName, setNickName] = useState('')
  const [message, setMessage] = useState('')

  const handleWriteNickNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value)
  }

  const handleWriteMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }

  return (
    <>
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
    </>
  )
}

export default withGuideContainer(WriteMessage, GUIDE.FIXMEAL.WRITEMESSAGE, PATH.TOFIXMEAL.SEND)
