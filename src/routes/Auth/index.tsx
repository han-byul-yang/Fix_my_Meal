import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { firebaseAuthService } from 'utils/firebaseService/firebaseSetting'
import { createInfoToFirebase } from 'utils/firebaseService/firebaseDBService'
import { localStorageSetting } from 'utils/localStorageSetting'
import { errorMessages } from 'constants/errorMessages'

interface AuthProps {
  type: string
}

const Auth = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm()
  const { nickName, email, password } = getValues()
  const emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const onSubmit = (data: any) => {
    try {
      createUserWithEmailAndPassword(firebaseAuthService, email, password)
        .then(() => {
          createInfoToFirebase(email, 'userInfo', { email, nickName, writeNum: 0 })
          if (localStorage.getItem('email')) localStorage.removeItem('email')
          localStorageSetting('email', email, 3600)
        })
        .catch((error) => {
          if (error instanceof FirebaseError) throw new Error(error.code)
        })
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case errorMessages['auth/email-already-in-use']:
            console.log(error.message)
            break
          case errorMessages['auth/weak-password']:
            console.log(error.message)
            break
        }
      }
    }
    navigate('/makeTable/first')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('nickName', {
          required: '필수 입력 항목 입니다.',
          maxLength: { value: 8, message: '최대 8자까지 작성할 수 있습니다.' },
        })}
      />
      <ErrorMessage errors={errors} name='nickName' as='p' />
      <input {...register('email', { required: '필수 입력 항목 입니다.', pattern: emailRegexp })} />
      <ErrorMessage errors={errors} message='이메일 형식이 올바르지 않습니다.' name='email' as='p' />
      <input
        type='password'
        {...register('password', {
          required: '필수 입력 항목 입니다.',
          minLength: { value: 4, message: '4자 이상 12자 이하로 입력해주세요.' },
          maxLength: { value: 12, message: '4자 이상 12자 이하로 입력해주세요.' },
        })}
      />
      <ErrorMessage errors={errors} name='password' as='p' />
      <input
        type='password'
        {...register('checkPassword', {
          required: '필수 입력 항목 입니다.',
          validate: (value) => value === password,
        })}
      />
      <ErrorMessage errors={errors} message='비밀번호가 일치하지 않습니다.' name='checkPassword' as='p' />
      <input type='submit' />
    </form>
  )
}

export default Auth
