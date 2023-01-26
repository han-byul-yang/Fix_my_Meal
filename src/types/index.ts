export interface firebaseDBUserType {
  nickName: string
  writeNum: number
}

export interface tableInfoType {
  design: number
  color: number
  name: string
}

export interface mealInfoType {
  food: number
  design: number
  color: number
  text: string
}

export interface selectorStateType {
  tableReducer: tableInfoType
  mealReducer: mealInfoType
  userReducer: firebaseDBUserType
}

// firebaseDBUserTye => userInfoType
