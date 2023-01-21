import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface AuthProps {
  type: string
}

const Auth = ({ type }: AuthProps) => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm()
  const passwordValue = getValues('password')

  const onSubmit = (data: any) => console.log(getValues('password'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('nickName', {
          required: '필수 입력 항목 입니다.',
          maxLength: { value: 8, message: '최대 8자까지 작성할 수 있습니다.' },
        })}
      />
      <ErrorMessage errors={errors} name='nickName' as='p' />
      <input {...register('id', { required: '필수 입력 항목 입니다.' })} />
      <ErrorMessage errors={errors} name='id' as='p' />
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
          validate: (value) => value === passwordValue,
        })}
      />
      <ErrorMessage errors={errors} message='비밀번호가 일치하지 않습니다.' name='checkPassword' as='p' />
      <input type='submit' />
    </form>
  )
}

export default Auth
