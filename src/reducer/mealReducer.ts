const FOOD = 'meal/FOOD'
const DESIGN = 'meal/DESIGN'
const COLOR = 'meal/COLOR'
const TEXT = 'meal/TEXT'

export const setMealFood = (food: number) => ({ type: FOOD, food })
export const setMealDesign = (design: number) => ({ type: DESIGN, design })
export const setMealColor = (color: number) => ({ type: COLOR, color })
export const setMealText = (text: string) => ({ type: TEXT, text })

const initialMealState = {
  food: 1,
  design: 1,
  color: 1,
  text: '',
}

export default function mealReducer(
  // eslint-disable-next-line default-param-last
  state = initialMealState,
  action: { type: string; [select: string]: string | number }
) {
  switch (action.type) {
    case FOOD:
      return {
        ...state,
        food: action.food,
      }
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
    case TEXT:
      return {
        ...state,
        text: action.text,
      }
    default:
      return state
  }
}
