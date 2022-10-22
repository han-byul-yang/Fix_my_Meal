import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { IBoardTaskList } from 'types/taskType'
import Board from 'routes/MakeTodo/Board'
import { INoticeMessage } from 'types/noticeMessageType'

const { persistAtom } = recoilPersist({
  key: 'storeDatas',
  storage: localStorage,
})

export const tasksAtom = atom<IBoardTaskList>({
  key: 'tasks',
  default: {
    TODO: [],
    DOING: [],
    DONE: [],
  },
  effects_UNSTABLE: [persistAtom],
})

export const searchKeyAtom = atom<string>({
  key: 'searchKey',
  default: '',
})

export const boardProcessAtom = atom<string[]>({
  key: 'boardProcessKey',
  default: ['TODO', 'DOING', 'DONE'],
  // effects_UNSTABLE: [persistAtom],
})

export const isOpenAddBoardModalAtom = atom({
  key: 'isOpenAddBoardModal',
  default: {
    type: 'add',
    isOpen: false,
  },
}) // isOpenSettingBoardNameModal name은 어던가, type 설정

/* export const isOpenAddTaskModalAtom = atom({
  key: 'isOpenAddTaskModal',
  default: false,
}) */

export const isOpenNoticeModalAtom = atom<boolean>({
  key: 'isOpenNoticeModal',
  default: false,
})

export const noticeMessageAtom = atom<INoticeMessage>({
  key: 'noticeMessage',
  default: {
    message: '',
    noticeMessageOkButtonHandle: () => {},
  },
})

export const boardsRoutesAtom = atom({
  key: 'boardsRoutes',
  default: [
    {
      path: 'todo',
      element: <Board process='todo' />,
    },
    {
      path: 'doing',
      element: <Board process='doing' />,
    },
    {
      path: 'done',
      element: <Board process='done' />,
    },
  ],
})
