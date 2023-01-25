const DESIGN = 'table/DESIGN'
const COLOR = 'table/COLOR'
const NAME = 'table/NAME'

export const setTableDesign = (design: number) => ({ type: DESIGN, design })
export const setTableColor = (color: number) => ({ type: COLOR, color })
export const setTableName = (name: string) => ({ type: NAME, name })

const initialTableState = {
  design: 1,
  color: 1,
  name: '',
}

export default function tableReducer(
  // eslint-disable-next-line default-param-last
  state = initialTableState,
  action: { type: string; [select: string]: string | number }
) {
  switch (action.type) {
    case DESIGN:
      return {
        ...state,
        design: action.design,
      }
    case COLOR:
      return {
        ...state,
        color: action.color,
      }
    case NAME:
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}
