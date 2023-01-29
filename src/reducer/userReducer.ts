const EMAIL = 'user/EMAIL'
const NICKNAME = 'user/NICKNAME'
const WRITENUM = 'user/WRITENUM'

export const setUserEmail = (email: string) => ({ type: EMAIL, email })
export const setUserNickname = (nickname: string) => ({ type: NICKNAME, nickname })
export const setUserWriteNum = (writeNum: string) => ({ type: WRITENUM, writeNum })

const initialUserState = {
  email: '',
  nickname: '',
  writeNum: '',
}

export default function userReducer(
  // eslint-disable-next-line default-param-last
  state = initialUserState,
  action: { type: string; [select: string]: string }
) {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email: action.email,
      }
    case NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      }
    case WRITENUM:
      return {
        ...state,
        writeNum: action.writeNum,
      }
    default:
      return state
  }
}
