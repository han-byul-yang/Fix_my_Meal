const NICKNAME = 'user/NICKNAME'
const WRITENUM = 'user/WRITENUM'

export const setUserNickname = (nickname: string) => ({ type: NICKNAME, nickname })
export const setUserWriteNum = (writeNum: string) => ({ type: WRITENUM, writeNum })

const initialUserState = {
  nickname: '',
  writeNum: '',
}

export default function userReducer(
  // eslint-disable-next-line default-param-last
  state = initialUserState,
  action: { type: string; [select: string]: string }
) {
  switch (action.type) {
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
